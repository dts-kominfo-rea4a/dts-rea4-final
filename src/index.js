import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./containers/HomePage";
import DetailPage from "./containers/DetailPage";
import SearchPage from "./containers/SearchPage";
import SignInContainer from "./containers/SignInContainer";
import RegisterContainer from "./containers/RegisterContainer";
import LogoutContainer from "./containers/Logout Container";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LandingContainer from "./containers/LandingContainer";

import "@fontsource/poppins";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/content/*" element={<DetailPage />} />
          <Route path="/search/*" element={<SearchPage />} />
          <Route path="/signin" element={<SignInContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/logout" element={<LogoutContainer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
