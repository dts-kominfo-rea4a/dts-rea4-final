import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import HomePage from "./containers/HomePage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import DetailPage from "./containers/DetailPage";
import ProfilePage from "./containers/ProfilePage";
import NotFound from "./containers/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent title="Daftar Surat">
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/surat/:suratId"
          element={
            <ProtectedComponent title="Surat">
              <DetailPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedComponent title="Profil Saya">
              <ProfilePage />
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
        <Route
          path="/register"
          element={
            <ProtectedComponent withAuth={false}>
              <RegisterPage />
            </ProtectedComponent>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
