import React from "react";
import Logo from "../components/Logo";
import LogoutForm from "../components/LogoutForm";
import { Box, Container } from "@mui/material";

export default function LogoutContainer() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            p: "20px",
          }}
        >
          <Logo />
          <LogoutForm />
        </Box>
      </Container>
    </>
  );
}
