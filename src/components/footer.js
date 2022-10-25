import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

import logo from "../logo.png";

export default function Footer() {
  
  return (
    <footer>
      <Container maxWidth="lg">
        <Box className="main-footer" py={6} display="flex" flexWrap="wrap" alignItems="center" sx={{ justifyContent: 'space-between' }}>
          <Link href="/" color="inherit" underline="none">
            <img              
              className="nav__logo"
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
            &copy; Copyright 2022 | All right reserved
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
