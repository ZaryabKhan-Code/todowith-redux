"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setToken } from "@/redux/authSlice";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";

const Callback = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const existingToken =
      useSelector(selectToken) || localStorage.getItem("token");
    if (existingToken) {
      console.log("Token already exists:", existingToken);
      redirect("/profile");
    }

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
    }
  }, [dispatch, router.query]);

  return <div>Redirecting...</div>;
};

export default Callback;
