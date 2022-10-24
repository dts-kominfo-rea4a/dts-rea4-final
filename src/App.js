// import logo from './logo.svg';
import React from 'react';
import index from './index.css';
import Dashboard from './container/Dashboard';
import axios from 'axios';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';

const monoChromeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000'
    },

  },
});
const options = {
  method: 'GET',
  url: 'https://newsx.p.rapidapi.com/search',
  params: {limit: '10', skip: '0'},
  headers: {
    'X-RapidAPI-Key': '98e0325be9mshbc00fa3bbea457ap1a0c46jsn9bd045faddbc',
    'X-RapidAPI-Host': 'newsx.p.rapidapi.com'
  }
};

export const ambilBerita = axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={monoChromeTheme}>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        

      </ThemeProvider>
    </div>
  );
}

export default App;
