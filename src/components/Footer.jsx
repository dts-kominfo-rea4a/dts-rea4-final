import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return(
        <Container maxWidth="xl"  sx={{display:'block',backgroundColor: '#f8f8f8', opacity: 0.3, height:'83px', alignItems:'center'}}>
            <Typography variant='body2' sx={{textAlign:"center"}}>
                Copyright 2022 News Portal
            </Typography>

        </Container>
    )
}

export default Footer;