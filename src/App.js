import "./App.css";
import { ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { storeRTK } from "./app/store";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <Provider store={storeRTK}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ background: "#fff" }}>
          <Appbar />
          {/* <Products /> */}
          <Outlet />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
