// Profile.js
"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/authSlice";
import ProtectedRoute from "@/middleware/ProtectedRoute";
import { redirect } from "next/navigation";

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    redirect("/login");
  };

  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default ProtectedRoute(Profile);
