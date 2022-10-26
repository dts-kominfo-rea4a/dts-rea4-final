import React, { useRef } from "react";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";
import "./SignupScreen.css";
import auth from "../firebase";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log("Registered user", response.user);
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={register}>
          Sign Up now.
        </button>

        
      </form>
    </div>
  );
};

export default SignupScreen;
