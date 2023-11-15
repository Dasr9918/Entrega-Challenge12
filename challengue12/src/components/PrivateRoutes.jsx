import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import UserContext from "../context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    localStorage.setItem("lastPath", window.location.pathname);
    return <Navigate to="/login" />;
  }

  return <Route path="/dashboard">{children}</Route>;
};

export default PrivateRoutes;
