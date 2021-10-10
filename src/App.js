import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import Map from "./Map";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
  );
}
