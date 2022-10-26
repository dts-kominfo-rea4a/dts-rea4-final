import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import Navbar from "../components/Navbar";

const HalamanUtama = () => {
const navigate = useNavigate();

const [user, isLoading] = useAuthState(auth);
useEffect(
    () => {
    if (isLoading) {
        return;
    }
    if (user) {
        navigate("/home");
    }
    },
    [user, isLoading, navigate]
    );
    return (

    <>
    <Navbar isLoggedIn={user} logout="" />
    <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt="/"
        />
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="mt-[80px] w-full h-screen text-center flex-col justify-center text-white">
            <h1 className="md:text-6xl sm:text-6xl text-3xl font-bold md:py-6">
              Its time to TriFlix n Chillin'
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                Watch everywhere and anywhere you want.
              </p>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">
              Register to start watching.
            </p>
            <Link to="/register">
              <button className="bg-red-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
