import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { auth, signOutCurrentUser } from "../authentication/firebase";
import SearchBar from "./SearchBar";

function Navbar() {
  const navigate = useNavigate;
  const handleSignOut = async () => {
    try {
      await signOutCurrentUser().then(navigate("/login"));
    } catch (error) {
      
    }
  };
  const [user] = useAuthState(auth);

  return (
    <header className="bg-secondary-600 sticky top-0 z-50">
      <nav className="px-6 xs:px-12 m-auto lg:px-14 h-20 flex justify-between items-center gap-8">
        <a href="/" className="hidden xs:block">
          <img src={logo} alt="logo" className="h-8 md:h-11" />
        </a>
        {user ? (
          <div className="flex divide-x  divide-gray-500 [&>*]:px-4 items-center text-xs">
            <SearchBar />
            <div>
              <button
                className="px-4 py-2 rounded bg-primary cursor-pointer hover:bg-primary/90 active:bg-primary"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-xs">
            <Link to="/login">Sign In</Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded bg-primary cursor-pointer hover:bg-primary/90 active:bg-primary"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
