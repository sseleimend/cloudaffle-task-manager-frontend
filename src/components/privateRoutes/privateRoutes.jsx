import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

export const PrivateRoutes = () => {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to="/" />;
};
