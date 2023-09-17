import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext();

  return user ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
