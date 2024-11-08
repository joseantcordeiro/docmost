import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/notifications/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { theme } from "@/theme";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { loadCatalog } from "./i18n";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

loadCatalog("pt");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <I18nProvider i18n={i18n}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <QueryClientProvider client={queryClient}>
            <Notifications position="bottom-center" limit={3} />
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </QueryClientProvider>
        </ModalsProvider>
      </MantineProvider>
    </I18nProvider>
  </BrowserRouter>,
);
