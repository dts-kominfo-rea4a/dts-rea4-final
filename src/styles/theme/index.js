import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "",
  info: "",
  danger: "",
  warning: "",
  dark: "",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
