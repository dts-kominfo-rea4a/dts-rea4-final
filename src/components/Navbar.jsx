import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="bg-secondary-600 sticky top-0 z-50">
      <nav className="px-12 m-auto lg:px-14 h-20 flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="logo" className="h-11" />
        </a>
        <ul className="flex items-center gap-6">
          <Link to="/Login">Sign In</Link>
          <Link to="/Register" className="px-4 py-2 bg-primary rounded">Sign Up</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
