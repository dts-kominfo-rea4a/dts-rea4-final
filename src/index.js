import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppLayout from "./containers/AppLayout";
import HomePage from "./containers/HomePage";
import SearchPage from "./containers/SearchPage";
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";
import themeOne from "./themes/themeOne";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOne}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<AppLayout />}
            >
              <Route
                path="/"
                element={<HomePage />}
              />
            </Route>
            <Route
              path="/:textSearch"
              element={<AppLayout />}
            >
              <Route
                path="/:textSearch"
                element={<SearchPage />}
              />
            </Route>
            <Route
              path="/signIn"
              element={<AppLayout />}
            >
              <Route
                path="/signIn"
                element={<SignInPage />}
              />
            </Route>
            <Route
              path="/signUp"
              element={<AppLayout />}
            >
              <Route
                path="/signUp"
                element={<SignUpPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
