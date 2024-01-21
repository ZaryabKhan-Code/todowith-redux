"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { selectToken } from "@/redux/authSlice";
import { useSelector } from "react-redux";
export default function ProtectedRoute(Component) {
  return function ProtectedRoute(props) {
    const token = useSelector(selectToken);
    console.log(token);
    useEffect(() => {
      if (!token) {
        redirect("/login");
      }
    }, []);
    if (!token) {
      return;
    }
    return <Component {...props} />;
  };
}
