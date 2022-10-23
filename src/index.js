import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import MovieDetailPage from './containers/MovieDetailPage';
import NoMatchPage from './containers/NoMatchPage';
import MoviesPage from './containers/MoviesPage';
import Movie from './components/Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          } />        
        <Route path="movies" element={<ProtectedComponent><MoviesPage /></ProtectedComponent>} />
        <Route path="movie/:id" element={<ProtectedComponent><MovieDetailPage /></ProtectedComponent>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NoMatchPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
