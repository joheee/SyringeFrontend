import { useEffect } from "react";
import { AuthMiddlewareInterface } from "../config/Interfaces";
import { useNavigate } from "react-router-dom";

export default function AuthMiddleware({ children }: AuthMiddlewareInterface) {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("logged_user");
    if (!user) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, [navigate]);
  return { children };
}
