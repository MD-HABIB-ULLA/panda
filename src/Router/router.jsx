import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/logIn",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
