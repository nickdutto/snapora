import { RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import { QueryProvider } from "~/integrations/tanstack-query/components/query-provider";
import { router } from "~/integrations/tanstack-router/core/router";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>,
);
