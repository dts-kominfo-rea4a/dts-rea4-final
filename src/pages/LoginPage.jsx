import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";

function LoginPage() {
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
          <form className="flex flex-col gap-6 text-base">
            <input
              type="email"
              placeholder="Email"
              className="px-5 py-3 rounded bg-secondary-400 focus:bg-secondary-300 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-5 py-3 rounded bg-secondary-400 focus:bg-secondary-300 outline-none"
              required
            />
            <input
              type="submit"
              value="Sign In"
              className="px-5 py-3 mt-6 rounded bg-primary cursor-pointer hover:bg-primary/90 active:bg-primary"
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
