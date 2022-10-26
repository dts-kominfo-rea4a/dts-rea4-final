import React,{ useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useThemeStore, {selectTheme} from "../stores/theme";

function ThemeComponent({ children }) {
    const appTheme = useThemeStore(selectTheme);
    const [isDarkMode, setDarkMode] = useState(false);
    // console.log(appTheme);
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
        setDarkMode(appTheme);
        console.log('set');
        // eslint-disable-next-line
    },[])

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
}

export default ThemeComponent