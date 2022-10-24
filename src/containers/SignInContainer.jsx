import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Logo from "../components/Logo";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ p: "20px" }}>
          <Logo />
          <SignInForm />
        </Box>
      </Container>
    </>
  );
}
