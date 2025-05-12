import { createRouter } from "@tanstack/react-router";

import { getQueryClientContext } from "~/integrations/tanstack-query/core/client";
import { routeTree } from "~/routeTree.gen";

export const router = createRouter({
  routeTree,
  context: {
    ...getQueryClientContext(),
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
