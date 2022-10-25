import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3CD0F",
      dark: "#BF8300",
    },
    secondary: {
      main: "#B673C0",
      dark: "#5D2D68",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto"].join(","),
  },
});

export default theme;
