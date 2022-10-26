// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import HomeScreen from "./containers/HomeScreen";
import MovieDetail from "./containers/MovieDetail";
import LoginScreen from "./containers/LoginScreen";
import auth from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./containers/ProfileScreen";
import NotFoundPage from "./containers/NotFoundPage";
import CategoryScreen from "./containers/Category";
import Searched from "./containers/Searched";

import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

// import axios from "../axios";
// import requests from "../Requests";

function App() {
  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!loading ? (
        !user ? (
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/movie/:name" element={<MovieDetail />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/category/:cat" element={<CategoryScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )
      ) : (
        <CircularProgress size={"100%"} />
      )}
    </div>
  );
}

export default App;
