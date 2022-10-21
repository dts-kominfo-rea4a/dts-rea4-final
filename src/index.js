import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import HomePage from "./containers/HomePage";
import ProtectedComponent from "./components/ProtectedComponent";
import NotFoundPage from "./containers/NotFoundPage";
import BaseLayout from "./containers/BaseLayout";
import SearchPage from "./containers/SearchPage";
import DetailsPage from "./containers/DetailsPage";

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
              <BaseLayout title="Home Page">
                <HomePage />
              </BaseLayout>
            </ProtectedComponent>
          }
        />
        <Route
          path="search"
          element={
            <ProtectedComponent>
              <BaseLayout title="Hasil pencarian">
                <SearchPage />
              </BaseLayout>
            </ProtectedComponent>
          }
        />
        <Route path="details">
          <Route
            path=":bookId"
            element={
              <ProtectedComponent>
                <BaseLayout title="Hasil pencarian">
                  <DetailsPage />
                </BaseLayout>
              </ProtectedComponent>
            }
          />
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
