import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const getUserId = localStorage.getItem("userId");
  console.log("getUserId", getUserId);
  // const isAuthenticated = JSON.parse(getUserId).id;
  if (!getUserId) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export const AdminProtectedRoute = ({ children }) => {
  const getUserId = localStorage.getItem("userId");
  const isAuthenticated = JSON.parse(getUserId).isAdmin;
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};
