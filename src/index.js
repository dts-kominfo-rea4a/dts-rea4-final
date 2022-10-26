import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import HomePage from "./containers/HomePage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";

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
          path="/register"
          element={
            <ProtectedComponent withAuth={false}>
              <RegisterPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedComponent withAuth={false}>
              <LoginPage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
