import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Products from "./components/product";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ background: "#fff" }}>
        <Appbar />
        {/* <Products /> */}
        <Outlet />
      </Container>
    </ThemeProvider>
  );
  /*
  AppBar
  Banner
  Promotion
  Title
  Products
  Footer
  Searchbox 
  Appdrawer
  */
}

export default App;
