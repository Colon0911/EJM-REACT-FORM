import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { email, user, logout } = useAuth();
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <p>{email}</p>
      <button onClick={logout}>Cerrar Seccion</button>
    </>
  );
};

export default Dashboard;
