import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, registerDenganEmailDanPassword } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const emailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const passwordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const LoginHandler = () => {
    navigate("/login");
  };
  const RegisterHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen h-200 bg-no-repeat bg-cover bg-[url('../public/assets/bg.svg')] md:px-0 px-4">
        <div className="w-full md:w-96 bg-white z-20 shadow-lg rounded-md p-4 py-6 space-y-4 hover:scale-110 ease-in-out duration-150">
          <h1 className="font-bold text-center">Register</h1>
          <p className="text-sm text-center">Fill the form below to create an account!</p>
          <div>
            <input value={credential.email} onChange={emailOnChangeHandler} type="email" id="email" className="bg-fuchsia-50 border text-gray-900 text-sm rounded-full focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2 px-4 " placeholder="E-mail" />
          </div>
          <div>
            <input value={credential.password} onChange={passwordOnChangeHandler} type="password" id="password" className="bg-fuchsia-50 border  text-gray-900 text-sm rounded-full focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2 px-4" placeholder="Password" />
          </div>
          <div className="flex justify-end">
            <button onClick={RegisterHandler} type="button" className="w-full text-white bg-fuchsia-900 mb-2 hover:bg-fuchsia-900 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2 ">
              Register
            </button>
          </div>
          <div onClick={LoginHandler} className="text-center text-sm text-fuchsia-900 hover:cursor-pointer">
            <p>Already have an account? Sign In!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
