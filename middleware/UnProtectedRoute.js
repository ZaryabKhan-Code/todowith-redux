"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { selectToken } from "@/redux/authSlice";
import { useSelector } from "react-redux";

export default function UnProtectedRoute(Component) {
  return function UnProtectedRoute(props) {
    const token = useSelector(selectToken);
    console.log(token);
    useEffect(() => {
      if (token) {
        redirect("/profile");
      }
    }, []);
    if (token) {
      return;
    }
    return <Component {...props} />;
  };
}
