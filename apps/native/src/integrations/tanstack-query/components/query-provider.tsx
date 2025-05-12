import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "~/integrations/tanstack-query/core/client";

type QueryProviderProps = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: QueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
