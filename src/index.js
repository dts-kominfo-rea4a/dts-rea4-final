import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import DatailPage from "./pages/DatailPage";
import ProtectedComponent from "./components/ProtectedComponent";
import SearchPage from "./pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedComponent>
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/detail/:type/:id"
          element={
            <ProtectedComponent>
              <DatailPage />
            </ProtectedComponent>
          }
        />

        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
