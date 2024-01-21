"use client";
import { selectToken } from "@/redux/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const Login = () => {
  const token = useSelector(selectToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      redirect("/profile");
    }
    setLoading(false);
  }, [token]);

  const handleLogin = () => {
    try {
      // window.location.href = "http://localhost:3000/auth/google";
      window.location.href =
        "https://twiliotest-b82fb9f88880.herokuapp.com/auth/google";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </>
  );
};

export default Login;
