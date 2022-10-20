import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container max-maxWidth="xl" sx={{ background: "#fff" }}>
        <Button variant="contained">TES</Button>
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
