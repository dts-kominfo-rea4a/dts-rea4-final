import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import View from "./pages/View";
import FirstPage from "./pages/FirstPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<App />} />
        <Route path="first" element={<FirstPage />} />
        <Route path="login" element={<Login loginOrRegister="login" />} />
        <Route
          path="register"
          element={<Register oginOrRegister="register" />}
        />
        <Route path="view/:type/:id" element={<View />} />
      </Routes>
      <div className="text-slate-50 text-sm text-center w-full py-6 font-semibold ">
        <div>Created By Aditya Prasetyo & Bobby Putra Kurniawan</div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
