import React, { useState } from 'react';
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import useThemeStore from '../stores/theme';

function Navbar(props) {
    const [nav, setNav] = useState(false);
    const appTheme = useThemeStore();
    console.log(appTheme.darkMode)
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        } else {
            setNav(false);
        }
    }
    const setDarkThemeHandler = () => {
        appTheme.setDarkMode();
    };
    window.addEventListener('scroll', changeBackground);
    // const { isDarkMode, HandleDarkMode } = props;
    return (
        <nav className={nav ? 'nav active': 'nav'}>
            <a href='#main' className='logo'>
                <img src='/logo.png' alt="" width="50px"/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' >
                <span className='nav-icon'>asdfsdfsdf</span>
            </label>
            <ul className='menu'>
                <li><Link activeClass="active" to="main" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="features" spy={true} smooth={true}>Features</Link></li>
                <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                <li><Link to="presentaion" spy={true} smooth={true}>UI</Link></li>
                <li><Link to="contact" spy={true} smooth={true}>Contact US</Link></li>
                <li><Link2 to="/login">Login</Link2></li>
                <li><Link2 to="/register">Register</Link2></li>
                <li><a onClick={() => setDarkThemeHandler()} href="#a">
                        {appTheme.darkMode ? "Light Mode" : "Dark Mode"}
                    </a></li>
            </ul>
        </nav>
    
    )
}

// const customstyle = {
//     logo: {
//       flexGrow: "1",
//       fontWeight: "bold",
//     },
//     button: {},
//   };
  

export default Navbar;