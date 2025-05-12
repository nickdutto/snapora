import { source } from "@/src/lib/source";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import { structure } from "fumadocs-core/mdx-plugins";
import { createSearchAPI } from "fumadocs-core/search/server";

const server = createSearchAPI("advanced", {
  indexes: source.getPages().map((page) => ({
    id: page.url,
    url: page.url,
    title: page.data.title ?? "",
    description: page.data.description,
    structuredData: structure(page.data.content),
  })),
});

export const APIRoute = createAPIFileRoute("/api/search")({
  GET: ({ request }) => {
    return server.GET(request);
  },
});
