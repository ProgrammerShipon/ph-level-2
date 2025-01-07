import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./providers/themeProvider.tsx";
import { store } from "./redux/store.ts";
import appRoutes from "./routes/route.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <StrictMode> */}
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </ThemeProvider>
    {/* </StrictMode> */}
  </>
);
