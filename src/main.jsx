import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { Router } from "./Provider/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <MainLayout />
      <Toaster />
    </RouterProvider>
  </StrictMode>
);
