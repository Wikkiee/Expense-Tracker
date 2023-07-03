import React, { useState } from "react";
export const AuthenticationContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
