// Profile.js
"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/authSlice";
import ProtectedRoute from "@/middleware/ProtectedRoute";
import { redirect, useRouter } from "next/navigation";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default ProtectedRoute(Profile);
