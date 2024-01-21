"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { selectToken } from "@/redux/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ProtectedRoute(Component) {
  return function ProtectedRoute(props) {
    const token = useSelector(selectToken);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!token) {
        redirect("/login");
      }
      const verifyToken = async () => {
        try {
          const response = await axios.get(
            // "http://localhost:3000/verifyToken",
            "https://twiliotest-b82fb9f88880.herokuapp.com/verifyToken",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = response.data;

          if (response.status === 200) {
            console.log("Token is valid:", data);
          } else {
            redirect("/login");
          }
        } catch (error) {
          console.error("Error verifying token:", error);
        } finally {
          setLoading(false);
        }
      };

      if (token) {
        verifyToken();
      } else {
        redirect("/login");
      }
    }, [token]);
    if (loading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}
