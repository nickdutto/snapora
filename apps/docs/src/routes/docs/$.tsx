import type { PageTree } from "fumadocs-core/server";

import * as path from "node:path";

import { source } from "@/src/lib/source";
import { createCompiler } from "@fumadocs/mdx-remote";
import { executeMdxSync } from "@fumadocs/mdx-remote/client";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";

export const Route = createFileRoute("/docs/$")({
  component: Page,
  async loader({ params }) {
    const slugs = (params._splat ?? "").split("/");

    return loader({ data: slugs });
  },
});

const compiler = createCompiler({
  development: false,
});

const loader = createServerFn({
  method: "GET",
})
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    if (!page) throw notFound();

    const { content, ...rest } = page.data;
    const compiled = await compiler.compileFile({
      path: path.resolve("content/docs", page.file.path),
      value: content,
    });

    return {
      tree: source.pageTree as object,
      ...rest,
      compiled: compiled.toString(),
    };
  });

function Page() {
  const { tree, compiled, ...data } = Route.useLoaderData();
  const { toc, default: MdxContent } = executeMdxSync(compiled);

  return (
    <DocsLayout
      nav={{
        title: "Tanstack Start",
      }}
      tree={tree as PageTree.Root}
    >
      <DocsPage toc={toc}>
        <DocsTitle>{data.title}</DocsTitle>
        <DocsDescription>{data.title}</DocsDescription>
        <DocsBody>
          <MdxContent components={defaultMdxComponents} />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
