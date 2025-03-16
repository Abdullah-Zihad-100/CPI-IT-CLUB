import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Members from "../pages/Members";
import Event from "../pages/Event";
import About from "../pages/About";
import Login from "../pages/login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About/>,
      },
      {
        path: "/event",
        element: <Event/>,
      },
      {
        path: "/members",
        element: <Members />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
