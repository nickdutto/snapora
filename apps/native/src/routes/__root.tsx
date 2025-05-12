import type { QueryClient } from "@tanstack/react-query";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { QueryDevtools } from "~/integrations/tanstack-query/components/query-devtools";
import { RouterDevtools } from "~/integrations/tanstack-router/components/router-devtools";

export type MyRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />

      <RouterDevtools />
      <QueryDevtools />
    </>
  );
}
