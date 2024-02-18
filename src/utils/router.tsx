import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { ROUTES } from "../constants";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.home} replace />,
      },
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.login,
        element: <Login />,
      },
    ],
  },
]);
