import React from 'react';
import Header from "../components/Landing/Header";
import Feature from "../components/Landing/Feature";
import About from "../components/Landing/About";
import aboutImage1 from '../images/Frame 19.png';
import Presentation from '../components/Landing/Presentation';
import Contact from "../components/Landing/Contact";
import '../styles/LandingPage.css';
import Navbar from '../components/Navbar';

function LandingPage() {
  // const { isDarkMode, HandleDarkMode } = props;
  return (
    <>
    <Header/>
    <Navbar/>
    <Feature/>
    <About image={aboutImage1} title="Comea asf jslfjlsjflsafjslfjal" button="Get App" id='about' />
    <Presentation/>
    <Contact/>
    </>
  )
}

export default LandingPage