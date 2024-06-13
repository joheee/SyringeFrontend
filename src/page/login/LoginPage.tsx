import { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db_auth } from "../../config/FirebaseConnect";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function handleLogin() {
    await signInWithEmailAndPassword(db_auth, email, password)
      .then((cred) => {
        localStorage.setItem("logged_user", cred.user.email!);
        navigate("/dashboard");
      })
      .catch(() => toast.error("invalid credentials"));
  }

  const prop = {
    setEmail,
    setPassword,
    handleLogin,
  };

  return <LoginPresenter prop={prop} />;
}
