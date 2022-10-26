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

const Logins = ({ logins }) => {
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

    const result = await loginWithEmailAndPassword(credential.email, credential.password);
    setErrorMessage(result);
};

const registerHandler = async () => {

    const result = await registerEmailAndPassword(credential.email, credential.password);
    setErrorMessage(result);

};

const buttonLoginOrRegisterOnClickHandler = () => {
    if (logins === "login") {
    loginHandler();
    } else {
    registerHandler();
    }
};

useEffect(
    () => {

    if (isLoading) {     
        return;
    }


    if (user) {
        navigate("/");
    }
    },
    
    [user, isLoading, navigate,error]
);

  return (
    <>
      

      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className='text-3xl font-bold'>TriFlix.</h1>
              {errorMessage !== '' ? <p className='p-3 bg-red-400 my-2'>{errorMessage}</p> : null}
              <div className="w-full flex flex-col py-4 my-8">
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
                    {logins === "login" ? "login" : "register"}
                  </span>
                </button>
                {logins === "login" ? (
                  <Link to="/register">
                    <div className="text-center mt-1 text-md font-sans text-slate-100 font-semibold">
                    First to TriFlix ?
                    </div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <div className="text-center mt-1 text-md font-sans text-slate-100 font-semibold">
                    Already registered ?
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

export default Logins;
