import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import appRoutes from "./routes/route.tsx";
import { ThemeProvider } from "./providers/themeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
