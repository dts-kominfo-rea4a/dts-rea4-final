import React from 'react';

import { Routes, Route, } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import HomeDetails from './pages/HomeDetails';
import Postingan from "./pages/Postingan";
import HomePage1 from "./pages/HomePage1";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/homeDetail" element={<HomeDetails />} />
        <Route path="/postingan" element={<Postingan />} />
      </Routes>
    </div>
  );
}

export default App;
