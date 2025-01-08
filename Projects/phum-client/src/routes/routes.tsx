import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register.tsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default AppRouter;
