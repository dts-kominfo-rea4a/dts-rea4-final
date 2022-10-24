import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "../logo.png";
import MainMenu from "./MainMenu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/" + inputSearch);
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={logo}
          alt="metflix-logo"
        />
        <MainMenu />
        <div className="nav-right">
          <form className="form-field form-search" onSubmit={submitHandler}>
            <input
              onChange={(e) => setInputSearch(e.target.value)}
              name="search"
              type="search"
              placeholder="Enter your search ..."
              value={inputSearch}
            />
            <IconButton type="submit" aria-label="search" className="search-icon">
              <SearchIcon />
            </IconButton>
          </form>
          <div className="avatar">
            <img
              onClick={() => navigate("/profile")}
              className="nav__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="metflix-avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
