import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import "./global.css";
import AuthProviderWithNavigate from "./auth/AuthProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProviderWithNavigate>
          <AppRoute />
          <Toaster visibleToasts={1} position="top-right" richColors/>
        </AuthProviderWithNavigate>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
