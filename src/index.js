import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Show from './container/Show';
import Dashboard from './container/Dashboard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginOrRegisterForm from './components/LoginOrRegister';
import Register from './container/Register';
import Login from './container/Login';
import ProtectedComponent from './components/ProtectedComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        

        <Route path="/" element={
          <ProtectedComponent>
          <App />
         </ProtectedComponent>
        }>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/show" element={<Show />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
