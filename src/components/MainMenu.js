import React from "react";
import { Link } from "@mui/material";

const MainMenu = () => {
    return (
      <nav className="main-nav">
        <Link href="/">
          Home
        </Link>
        <Link href="/series">
          Series
        </Link>
        <Link href="/movies">
          Movies
        </Link>
        <Link href="/new">
          New and Popular
        </Link>
        <Link href="/my-list">
          My List
        </Link>
      </nav>
    );
}

export default MainMenu;