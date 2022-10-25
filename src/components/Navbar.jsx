import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { signOutCurrentUser } from "../authentication/firebase";

function Navbar({ loginStatus }) {
  const navigate = useNavigate;
  const handleSignOut = async () => {
    await signOutCurrentUser().then(navigate("/login"));
  };

  return (
    <header className="bg-secondary-600 sticky top-0 z-50">
      <nav className="px-12 m-auto lg:px-14 h-20 flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="logo" className="h-11" />
        </a>
        <ul className="flex items-center gap-6">
          {loginStatus ? (
            <button
              className="px-4 py-2 rounded text-sm bg-primary cursor-pointer hover:bg-primary/90 active:bg-primary"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login">Sign In</Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded bg-primary cursor-pointer hover:bg-primary/90 active:bg-primary"
              >
                Sign Up
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
