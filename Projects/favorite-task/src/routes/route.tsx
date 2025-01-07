import App from "@/App";
import Login from "@/pages/login";
import Tasks from "@/pages/tasks";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //   path: "/tasks",
        index: true,
        element: <Tasks />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default appRoutes;
