import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { signOutCurrentUser } from "../authentication/firebase";
import ProtectedComponent from "./ProtectedComponent";
import SearchBar from "./SearchBar";

function Navbar({ loginStatus }) {
  const navigate = useNavigate;
  const handleSignOut = async () => {
    await signOutCurrentUser().then(navigate("/login"));
  };

  return (
    <header className="bg-secondary-600 sticky top-0 z-50">
      <nav className="px-12 m-auto lg:px-14 h-20 flex justify-between items-center gap-8">
        <a href="/" className="hidden xs:block">
          <img src={logo} alt="logo" className="h-8 md:h-11" />
        </a>
        {loginStatus ? (
          <ProtectedComponent>
            <div className="flex divide-x  divide-gray-500 [&>*]:px-4 items-center text-xs">
              {/* <Link to="/search" className="m-0">
                <Icon icon="akar-icons:search" width="24" height="24" />
              </Link> */}
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
          </ProtectedComponent>
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
