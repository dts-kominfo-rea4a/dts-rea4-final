import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="bg-red-500">
      <a href="/">
        <img src={logo} alt="logo" className="h-11"/>
      </a>
    </div>
  );
}

export default Navbar;
