import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import UsersPage from "../pages/UsersPage";
import ProductPage from "../pages/ProductPage";


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path: "users",
              element: <UsersPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
