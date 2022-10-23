import React from "react";
import "./App.css";
import { Routes, Route, link } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import List from "./page/List";
import Detail from "./page/Detail";
import Error from "./page/Error";

function App() {
  return (
    <div className="App">
      {/* React Navigasi Link */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
