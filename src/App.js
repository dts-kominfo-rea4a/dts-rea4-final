// import logo from './logo.svg';
// import './App.css';
import React,{ useEffect, useState } from "react";
import LandingPage from "./containers/LandingPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useThemeStore, {selectTheme} from "./stores/theme";
import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { auth } from "./authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from "./containers/HomePage"

function App() {
  const appTheme = useThemeStore(selectTheme);
  const [isDarkMode, setDarkMode] = useState(false);
  // console.log(appTheme);
  const [user, loading] = useAuthState(auth);
  const theme = createTheme({
    palette: {
      background: {
        paper: isDarkMode? "hsl(209, 23%, 22%)": "hsl(0, 0%, 100%)",
        default: isDarkMode? "hsl(207, 26%, 17%)": "#f5f5f5"
      },
      text: {
        primary: isDarkMode? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)',
        secondary: isDarkMode? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'

      },
      primary: {
        main: isDarkMode? 'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)',
      }
    },
    typography: {
      fontFamily: "Poppins"
    }
  });
  useEffect(() => {
    setDarkMode(appTheme)
  },[])
 
  return (
    <ThemeProvider theme={theme} >
    <CssBaseline/>
    <div className="App">
      {user ? <NavbarUser/> : <Navbar />}
      <HomePage />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
