import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
