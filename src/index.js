import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedComponent from './components/ProtectedComponent';
import ProtectedHome from './components/ProtectedHome';
import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import MoviePage from './containers/MoviePage';
import MoviesPage from './containers/MoviesPage';
import SeriesPage from './containers/SeriesPage';
import SeriePage from './containers/SeriePage';
import SearchPage from './containers/SearchPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedHome>
            <App />
          </ProtectedHome>
          } />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={        
            <RegisterPage />
          } />
        <Route path="landing" element={<LandingPage />} />
        <Route path="movie/:movieId" element={
          <ProtectedComponent>
            <MoviePage />
          </ProtectedComponent>} />
        <Route path="movies/:category" element={
          <ProtectedComponent>
            <MoviesPage />
          </ProtectedComponent>} />
        <Route path="series/:category" element={
          <ProtectedComponent>
            <SeriesPage />
          </ProtectedComponent>} />
        <Route path="serie/:serieId" element={
          <ProtectedComponent>
            <SeriePage />
          </ProtectedComponent>} />
        <Route path="tv/:serieId" element={
          <ProtectedComponent>
            <SeriePage />
          </ProtectedComponent>} />
        <Route path="search/:keyword" element={
          <ProtectedComponent>
            <SearchPage />
          </ProtectedComponent>} />
        <Route path="user" element={
          <ProtectedComponent>
            <LandingPage />
          </ProtectedComponent>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
