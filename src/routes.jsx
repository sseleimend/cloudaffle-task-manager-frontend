import { PrivateRoutes } from "./components/privateRoutes/privateRoutes.jsx";
import Error404 from "./pages/404/404.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Tasks from "./pages/tasks/tasks.jsx";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
