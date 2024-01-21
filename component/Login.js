"use client";
import React from "react";
import UnProtectedRoute from "@/middleware/UnProtectedRoute";

const Login = () => {
  const handleLogin = () => {
    try {
      // window.location.href = "http://localhost:3000/auth/google";
      window.location.href =
        "https://twiliotest-b82fb9f88880.herokuapp.com/auth/google";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
};

export default UnProtectedRoute(Login);
