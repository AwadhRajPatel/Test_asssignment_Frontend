import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // ...replace with your actual auth logic...
  const isAuthenticated = false; // placeholder for authentication status

  return isAuthenticated ? children : <Navigate to="/Profile" />;
};

export default PrivateRoute;
