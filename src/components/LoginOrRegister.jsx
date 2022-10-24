import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

// Pada bagian ini sekarang kita membutuhkan fungsi untuk melakukan login dan register
import {
  auth,
  loginWithEmailAndPassword,
  registerEmailAndPassword,
} from "../authentication/firebase";

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState('');

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

  const loginHandler = async () => {
    // console.log("Login");
    // navigate("/");

    // Kita di sini tidak menggunakan navigate ke login lagi,
    // karena pada firebase, ketika selesai login,
    // maka auth statenya akan otomatis berubah (hooks useAuthState, data user)
    const result = await loginWithEmailAndPassword(credential.email, credential.password);
    setErrorMessage(result);
  };

  const registerHandler = async () => {
    // console.log(credential)
    // console.log("Register");
    // navigate("/login");

    // Kita di sini tidak menggunakan navigate ke login lagi, karena pada Firebase
    // Ketika selesai register akan otomatis login juga
    // dan auth statenya akan otomatis berubah (hooks useAuthState, data user)
    const result = await registerEmailAndPassword(credential.email, credential.password);
    setErrorMessage(result);

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
    [user, isLoading, navigate,error]
  );

  return (
    <>
      {/* <div className="w-full max-w-full flex bg-slate-900 h-screen">
        <div className="w-1/2 bg-blue-900">Image</div>
        <div className="w-1/2 m-auto max-w-md ">
          <div className="w-full flex flex-wrap justify-center gap-6 p-4">
            <label className="text-semibold text-md text-slate-50 text-bold text-xl">
              Email
            </label>
            <input
              type="text"
              className="border ml-8 rounded-md focus:outline-none focus:ring focus:border-slate-500 border-slate-400 shadow-md p-2"
              name="email"
              id="email"
              value={credential.email}
              onChange={textFieldEmailOnChangeHandler}
            />
          </div>
          <div className="w-full flex flex-wrap justify-center gap-6 mt-2 p-4">
            <label className="text-bold text-xl text-slate-50 align">
              Password
            </label>
            <input
              className="border rounded-md focus:outline-none focus:ring focus:border-slate-500 border-slate-400 shadow-md p-2"
              type="password"
              name="password"
              id="password"
              value={credential.password}
              onChange={textFieldPasswordOnChangeHandler}
            />
          </div>
          <div className="w-full pt-2 flex flex-wrap gap-4 justify-center">
            <button
              onClick={buttonLoginOrRegisterOnClickHandler}
              className="bg-blue-400 px-6 p-2 rounded-md  text-slate-50 hover:bg-blue-700"
            >
              <span className="text-xl font-bold">
                {loginOrRegister === "login" ? "login" : "register"}
              </span>
            </button>
          </div>

          {loginOrRegister === "login" ? (
            <Link to="/register">
              <div className="text-center mt-1 text-md font-sans text-slate-100 font-semibold">
                or do you want Register ?
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className="text-center mt-1 text-md font-sans text-slate-100 font-semibold">
                or do you want Login ?
              </div>
            </Link>
          )}
        </div>
      </div> */}

      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {errorMessage !== '' ? <p className='p-3 bg-red-400 my-2'>{errorMessage}</p> : null}
              <div className="w-full flex flex-col py-4">
                <input
                  type="email"
                  className="p-3 my-2 bg-gray-700 rouded"
                  name="email"
                  id="email"
                  value={credential.email}
                  onChange={textFieldEmailOnChangeHandler}
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="p-3 my-2 bg-gray-700 rouded"
                  name="password"
                  id="password"
                  value={credential.password}
                  onChange={textFieldPasswordOnChangeHandler}
                  placeholder="Password"
                />
                <button
                  onClick={buttonLoginOrRegisterOnClickHandler}
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                >
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

export default LoginOrRegister;
