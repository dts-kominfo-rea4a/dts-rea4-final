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
      <div className="w-full max-w-full flex bg-slate-900 h-screen">
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
      </div>
    </>
  );
};

export default LoginOrRegister;
