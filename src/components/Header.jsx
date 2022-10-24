import React from 'react';
import Navbar from './Navbar';

function Header() {
  // const { isDarkMode, HandleDarkMode } = props;
  return (
    <div id="main">
        <Navbar  />
        <div className='name'>
            <h1><span>Laun Your Application</span>with confdencafjlsjf sfjasdaf jsdjf</h1>
            <p className='details'>Lorem ipsusljfas fjasldjfsl fsdfjlas fjsldf sldf slfjlsdjf a fls sj s jfs sdfjlsajflsjfl ldsfjalsfjaslfj slfdjalsf
            sdfjslfjsl dfjslfj lsflsdjf lsf</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header;