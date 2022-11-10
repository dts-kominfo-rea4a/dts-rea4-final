import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import PostGrid from "./components/PostGrid";
import {logOut } from "../src/auth/firebase";

import './App.css';

// import material UI
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';

function App({ loginOrRegister }) {
  const navigate = useNavigate();
  const  [items, setItems] = useState([])
  const  [active, setActive] = useState([1])
  const  [category, setCategory] = useState(["technology"])

  const buttonLogoutOnClickHandler = () => {
    logOut();
    navigate("/login");
  };

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=427ae67a7bdb488497c3ef25af9dfa8f`).then(res => res.json()).then(data => setItems(data.articles))
  },[category])

  return (
    <div className="App">
      {loginOrRegister === "login" ? (
      <div className="button-section">
      <Link to="/login">
      <Button variant="outlined" size="small" sx={{ color: "#424242", }}>Masuk</Button>
      </Link>
      <Link to="/register">
      <Button variant="outlined" size="small" sx={{ color: "#424242", ml: 1,}}>Daftar</Button>
      </Link>
      </div>) : ( 
      <div className="button-section">
      <Button variant="outlined" size="small" color="error" onClick={buttonLogoutOnClickHandler}>Keluar</Button>
      </div>)}
      <h1 className="title">Tribun <strong>Gabun</strong></h1>
      <Divider variant="middle" />
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <PostGrid items={items}/>
      <Typography variant="subtitle1" sx={
        { p: 2, textAlign: "center",}
      }>
         Copyright &copy; 2022 | Tribun <strong>Gabun</strong>
      </Typography>
    </div>
  );
}

export default App;
