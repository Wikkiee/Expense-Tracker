import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext.jsx";

const useAuth = () => {
  return useContext(AuthenticationContext);
};

export default useAuth;
