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
      setLoading(true);
      redirect("/profile");
    }
  }, [token]);

  const handleLogin = () => {
    try {
      // Set loading to true when initiating login
      setLoading(true);

      // Simulate login with Google by redirecting to the authentication URL
      window.location.href =
        "https://twiliotest-b82fb9f88880.herokuapp.com/auth/google";
    } catch (error) {
      console.error("Login error:", error);
      // Set loading to false in case of an error
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </>
  );
};

export default Login;
