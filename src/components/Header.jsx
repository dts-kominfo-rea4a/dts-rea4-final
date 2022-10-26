import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

import { keluarDariAplikasi } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";


export default function Header() {
    
    const navigate = useNavigate();

    const buttonLogoutOnClickHandler = () => {
        keluarDariAplikasi();
        navigate("/login");
    };

    return (
        <Container className='head'>
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ flexGrow: 1, paddingY: "50px" }}>
                    <AppBar sx={{ backgroundColor: "white" }}>
                        <Toolbar position="absolute">
                            <Typography component="div" sx={{ color: "white", backgroundColor: "#121221", padding: "3px", paddingX: "5px", borderRadius: 1, fontWeight: 700, fontFamily: 'Playfair Display' }} >
                                Books
                            </Typography>
                            <Typography component="div" sx={{ color: "black", fontWeight: 700, padding: "5px", fontFamily: 'Playfair Display' }} >
                                Portal
                            </Typography>
                            <Button color="primary" onClick={buttonLogoutOnClickHandler} variant="contained" sx={{left:1000}} >
                                Logout
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </Container>
    );
}








