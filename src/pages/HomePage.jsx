import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
const HomePage = () => {
    const buttonLogoutOnClickHandler = async () => {
        await logOut();
        navigate("/login");
    };
    const navigate = useNavigate();
    return (
        <>
        <Box >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" >
                        Navbar
                    </Typography>
                    <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>

        </>
    )
}

export default HomePage;