import "./App.css";
import "@fontsource/poppins";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LandingContainer from "./containers/LandingContainer";
import { Routes, Route } from "react-router-dom";
import SignInContainer from "./containers/SignInContainer";
import RegisterContainer from "./containers/RegisterContainer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/signin" element={<SignInContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
