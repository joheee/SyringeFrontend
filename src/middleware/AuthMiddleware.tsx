import { useEffect } from "react";
import { AuthMiddlewareInterface } from "../config/Interfaces";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthMiddleware({ children }: AuthMiddlewareInterface) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("logged_user");
    if (!user && location.pathname === "/") {
      navigate("/");
    } else if (user && location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate, location]);

  return children;
}
