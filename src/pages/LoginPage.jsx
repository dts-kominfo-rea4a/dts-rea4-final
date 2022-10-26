import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import background from "../assets/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInUser } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import mapAuthCodeToMessage from "../authentication/mapAuthCodeToMessage";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitSignin = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      await signInUser(email, password);
    } catch (error) {
      setErrorMessage(mapAuthCodeToMessage(error.message));
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [isLoading, user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main
        className="min-h-screen grow flex justify-center items-center bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8)), url(${background})`,
        }}
      >
        <div className="flex flex-col gap-8 w-full max-w-[450px] px-16 py-14 my-10 rounded bg-black/70">
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <form
            className="flex flex-col gap-6 text-base"
            onSubmit={handleSubmitSignin}
          >
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Email"
              className="px-5 py-3 rounded bg-secondary-400 focus:bg-secondary-300 outline-none"
              required
              onChange={handleEmailChange}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="px-5 py-3 rounded bg-secondary-400 focus:bg-secondary-300 outline-none"
              required
              onChange={handlePasswordChange}
            />

            {/* error message */}
            <p className="text-red-500 text-xs font-light self-end">
              {errorMessage ? `*${errorMessage}` : ""}
            </p>

            <input
              type="submit"
              value="Sign In"
              className="px-5 py-3 rounded bg-primary cursor-pointer hover:bg-primary/90 active:bg-primary"
            />
          </form>
          <p className="text-secondary-200">
            New to Nguflix?{" "}
            <Link to="/register" className="text-white hover:underline ml-1">
              Sign up now
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer className="bg-white" />
    </div>
  );
}

export default LoginPage;
