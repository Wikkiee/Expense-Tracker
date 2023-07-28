import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuthHook";
import { useEffect } from "react";
import axios from "axios";
const ProtectedRoutes = () => {
  const { iaAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    axios({
      method: "get",
      url: import.meta.env.VITE_API_URL,
      withCredentials: true,
    }).then((result) => {
      setAuthenticated(() => result.data.isAuthenticated);
    });
  }, []);
  return iaAuthenticated ? <Navigate to='/' /> : <Outlet />;
};

export default ProtectedRoutes;
