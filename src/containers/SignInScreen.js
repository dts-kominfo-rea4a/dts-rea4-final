import React, { useRef } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignupScreen.css";
import auth from "../firebase";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log("Logged in user", response.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>        
      </form>
    </div>
  );
};

export default SignInScreen;
