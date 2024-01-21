"use client";
import { selectToken } from "@/redux/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import Link from "next/link";

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

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <Link onClick={handleLogin}>Login with Google</Link>
      </div>
    </div>
  );
};

export default Login;
