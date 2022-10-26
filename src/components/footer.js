import React from "react";
import {  Box, Typography, Link } from "@mui/material";

import logo from "../logo.png";

export default function Footer() {
  
  return (
    <footer style={{padding: '0 40px'}}>      
        <Box className="main-footer" py={6} display="flex" flexWrap="wrap" alignItems="center" sx={{ justifyContent: 'space-between' }}>
          <Link href="/" color="inherit" underline="none">
            <img              
              style={{width: '60px'}}
              src={logo}
              alt="metflix-logo"
            />
          </Link>
          
          <Typography
            color="#fff"
            component="p"
            variant="body"
            gutterBottom={false}
          >
            &copy; Copyright 2022 | Feri Murdeni & Calvin
          </Typography>
        </Box>      
    </footer>
  );
}
