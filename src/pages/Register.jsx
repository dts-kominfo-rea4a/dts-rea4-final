import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';


import {
  auth,
  loginWithEmailAndPassword,
  registerEmailAndPassword,
} from "../authentication/firebase";

const Register = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    // console.log("Login");
    // navigate("/");

    // Kita di sini tidak menggunakan navigate ke login lagi,
    // karena pada firebase, ketika selesai login,
    // maka auth statenya akan otomatis berubah (hooks useAuthState, data user)
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    // console.log(credential)
    // console.log("Register");
    // navigate("/login");

    // Kita di sini tidak menggunakan navigate ke login lagi, karena pada Firebase
    // Ketika selesai register akan otomatis login juga
    // dan auth statenya akan otomatis berubah (hooks useAuthState, data user)
    registerEmailAndPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              {/* {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null} */}
              <div className='w-full flex flex-col py-4'>
                <input
                type="email"
                className='p-3 my-2 bg-gray-700 rouded'
                name="email"
                id="email"
                value={credential.email}
                onChange={textFieldEmailOnChangeHandler}
                placeholder='Email'
                />
                <input
                  type="password"
                  className='p-3 my-2 bg-gray-700 rouded'
                  name="password"
                  id="password"
                  value={credential.password}
                  onChange={textFieldPasswordOnChangeHandler}
                  placeholder='Password'
                />
                <button 
                onClick={buttonLoginOrRegisterOnClickHandler}
                className='bg-red-600 py-3 my-6 rounded font-bold'>
                
                <span className="text-xl font-bold">
                {loginOrRegister === "login" ? "login" : "register"}
                </span>
                </button>
                {loginOrRegister === "login" ? (
                  <Link to="/register">
                    <div className="text-center mt-1 text-md font-sans text-slate-100 font-semibold">
                      or do you want Sign Up ?
                    </div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <div className="text-center mt-1 text-md font-sans text-slate-100 font-semibold">
                      or do you want Sign In ?
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
