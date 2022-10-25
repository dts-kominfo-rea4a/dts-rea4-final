import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/product";
import Movies from "./components/movie";
import PopularMovies from "./components/movie/PopularMovies";
import Banner from "./components/banner";
import LoginOrRegisterForm from "./components/login";
import Watchlist from "./components/watchlist";
import ProtectedComponent from "./components/auth/ProtectedComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={<LoginOrRegisterForm loginOrRegister={"login"} />}
        />
        <Route
          path="register"
          element={<LoginOrRegisterForm loginOrRegister={"register"} />}
        />
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          }
        >
          <Route path="/home" element={<Banner />} />
          <Route path="/products" element={<Products />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorite" element={<Watchlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
