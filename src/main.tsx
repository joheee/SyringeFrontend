import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./page/login/LoginPage";
import DevicePage from "./page/device/DevicePage";
import DashboardPage from "./page/dashboard/DashboardPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/device/:id",
    element: <DevicePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
      <RouterProvider router={router} />
  </React.StrictMode>
);
