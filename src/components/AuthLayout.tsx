import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { useUserContext } from "../context/AuthContext";
import Loader from "./Loader";

const AuthLayout = () => {
  const { isLoading, isAuthenticated } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate(ROUTES.login);
    } else if (isAuthenticated && !isLoading) {
      navigate(ROUTES.home);
    }
    // navigate shouldn't be in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return <Outlet />;
};

export default AuthLayout;
