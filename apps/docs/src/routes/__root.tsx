import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TanstackProvider } from "fumadocs-core/framework/tanstack";
import { RootProvider } from "fumadocs-ui/provider/base";
import { type ReactNode } from "react";

import appCss from "../app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Fumadocs on TanStack Start",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <TanstackProvider>
          <RootProvider>{children}</RootProvider>
        </TanstackProvider>
        <Scripts />
      </body>
    </html>
  );
}
