import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import SignInScreen from "./SignInScreen";
import logo from "../logo.png";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginscreen-nav">
          <img className="loginScreen__logo" src={logo} alt="metflix-logo" />
          <div className="button-group">
            <button
              onClick={() => {
                setSignUp(true);
                setSignIn(false);
              }}
              className="register-button loginScreen__button"
            >
              {" "}
              Sign Up{" "}
            </button>
            <button
              onClick={() => {
                setSignUp(false);
                setSignIn(true);
              }}
              className="login-button loginScreen__button"
            >
              {" "}
              Sign In
            </button>
          </div>
        </div>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : signUp ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes, and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
