"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

const Callback = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async (token) => {
      try {
        // const response = await axios.get("http://localhost:3000/verifyToken", {
        const response = await axios.get(
          "https://twiliotest-b82fb9f88880.herokuapp.com/verifyToken",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setToken(token));
        // Use localStorage instead of Cookies
        localStorage.setItem("token", token);
        router.push("/profile");
      } catch (error) {
        dispatch(setToken(null));
        console.error("Token verification failed:", error);
      }
    };

    const token =
      router.query?.token ||
      (typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("token"));

    console.log(token);
    if (token) {
      verifyToken(token);
      router.push("/login");
    }
  }, [dispatch, router.query]);

  return <div>Redirecting...</div>;
};

export default Callback;
