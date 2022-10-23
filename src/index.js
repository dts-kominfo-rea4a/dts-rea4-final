import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedComponent from "./components/ProtectedComponent";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ViewMoviePage from './containers/ViewMoviePage';
import PlayMoviePage from "./containers/PlayMoviePage";
import SeriesPage from './containers/SeriesPage';
import MoviesPage from './containers/MoviesPage';
import NewPopularPage from './containers/NewPopularPage';
import WatctListPage from './containers/WatchListPage';

import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedComponent><HomePage /></ProtectedComponent>} />
          <Route path='/viewmovie' element={<ProtectedComponent><ViewMoviePage /></ProtectedComponent>} />
          <Route path='/playmovie' element={<ProtectedComponent><PlayMoviePage /></ProtectedComponent>} />
          <Route path='/series' element={<ProtectedComponent><SeriesPage /></ProtectedComponent>} />
          <Route path='/movies' element={<ProtectedComponent><MoviesPage /></ProtectedComponent>} />
          <Route path='/newpopular' element={<ProtectedComponent><NewPopularPage /></ProtectedComponent>} />
          <Route path='/watchlist' element={<ProtectedComponent><WatctListPage /></ProtectedComponent>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
