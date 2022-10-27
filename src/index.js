import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/product";
import Movies from "./components/movie";
import UpcomingMovie from "./components/movie_upcoming";
import Banner from "./components/banner";
import LoginOrRegisterForm from "./components/login";
import Watchlist from "./components/watchlist";
import ProtectedComponent from "./components/auth/ProtectedComponent";
import Cart from "./components/cart";
import Contact from "./components/contact";

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

        <Route path="/" element={<App />}>
          <Route path="/home" element={<Banner />} />
          <Route
            path="/upcoming"
            element={
              <ProtectedComponent>
                <UpcomingMovie />
              </ProtectedComponent>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedComponent>
                <Movies />
              </ProtectedComponent>
            }
          />
          <Route
            path="/watchlist"
            element={
              <ProtectedComponent>
                <Watchlist />
              </ProtectedComponent>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedComponent>
                <Cart />
              </ProtectedComponent>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* <Route
          path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          }
        >
          <Route path="/home" element={<Banner />} />
          <Route path="/upcoming" element={<UpcomingMovie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
