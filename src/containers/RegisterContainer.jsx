import { Box, Container } from "@mui/material";
import React from "react";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";

export default function RegisterContainer() {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ p: "20px" }}>
          <Logo />
          <RegisterForm />
        </Box>
      </Container>
    </>
  );
}
