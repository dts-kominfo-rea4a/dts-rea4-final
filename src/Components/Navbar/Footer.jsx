import React from "react";
import { Typography, createTheme, ThemeProvider } from "@mui/material";
const Footer = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#949494",
      },
    },
  });
  return (
    <ThemeProvider theme={theme} marginTop={100}>
      <Typography color="primary" sx={{ fontFamily: "Playfair Display", margin: "75px 0" }}>
        Copyright 2022 News Portal
      </Typography>
    </ThemeProvider>
  );
};

export default Footer;
