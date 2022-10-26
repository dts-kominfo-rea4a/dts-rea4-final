import React from 'react';
import Navbar from '../Navbar';

function Header() {
  return (
    <div id="main">
        <Navbar  />
        <div className='name'>
            <h1><span>Movie DTS</span> Final Project React</h1>
            <p className='detailslanding'>Build with API TMDB, Zustand, Material UI, Firebase and some CSS Tailwind</p>
            
        </div>
    </div>
  )
}

export default Header;