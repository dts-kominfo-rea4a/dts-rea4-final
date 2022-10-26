import React from "react";
import { Link } from "@mui/material";

const MainMenu = () => {
    return (
      <nav className="main-nav">
        <Link href="/">
          Home
        </Link>
        <Link href="/category/series">
          Series
        </Link>
        <Link href="/category/movies">
          Movies
        </Link>
        <Link href="/category/new">
          New and Popular
        </Link>
        <Link href="/my-list">
          My List
        </Link>
      </nav>
    );
}

export default MainMenu;