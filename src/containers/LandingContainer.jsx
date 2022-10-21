import React from "react";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import { Box, Button, Typography } from "@mui/material";
import { FiFigma, FiGithub } from "react-icons/fi";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ p: "20px" }}>
          <Logo />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              p: "40px 0px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Hero />
            <Box
              fontFamily="Poppins"
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Link to="/signin">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ p: "15px 30px" }}
                >
                  <Typography fontWeight="700" color="white">
                    Sign In
                  </Typography>
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ p: "15px 30px" }}
                >
                  <Typography fontWeight="700">Register</Typography>
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            bottom: "0",
            width: "100%",
            left: "0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              p: "20px",
              boxShadow: "none",
            }}
          >
            <Typography fontWeight="900" color="primary.dark" fontSize="24px">
              Sauce
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FiGithub size="32px" color="#F3CD0F" />
              <FiFigma size="32px" color="#F3CD0F" />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
