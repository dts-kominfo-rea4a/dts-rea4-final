// import logo from './logo.svg';
// import './App.css';
import React from "react";
import NavbarUser from "./components/NavbarUser";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./containers/HomePage"

function App() {
  return (
    
    <div className="App">
      <NavbarUser/> 
      <HomePage />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </div>
  
  );
}

export default App;
