import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import HomePage from "./containers/HomePage";
import SecondPage from "./containers/SecondPage";
import ProtectedComponent from "./components/ProtectedComponent";
import NotFoundPage from "./containers/NotFoundPage";
import BaseLayout from "./containers/BaseLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={
            <ProtectedComponent loginOnly={false}>
              <LoginPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedComponent loginOnly={false}>
              <RegisterPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <BaseLayout>
                <HomePage />
              </BaseLayout>
            </ProtectedComponent>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="pages" element={<SecondPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
