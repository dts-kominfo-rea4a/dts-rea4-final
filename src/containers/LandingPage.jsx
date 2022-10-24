import React from 'react';
import Header from "../components/Header";
import Feature from "../components/Feature";
import About from "../components/About";
import aboutImage1 from '../images/Frame 19.png';
import Presentation from '../components/Presentation';
import Contact from "../components/Contact";

function LandingPage() {
  // const { isDarkMode, HandleDarkMode } = props;
  return (
    <>
    <Header/>
    <Feature/>
    <About image={aboutImage1} title="Comea asf jslfjlsjflsafjslfjal" button="Get App" id='about' />
    <Presentation/>
    <Contact/>
    </>
  )
}

export default LandingPage