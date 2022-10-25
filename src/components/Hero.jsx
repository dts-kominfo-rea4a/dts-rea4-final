import React from "react";
import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/hero-image.svg"}
          alt="hero-img"
        />
        <Typography textAlign="center" color="secondary.dark">
          “Sebuah portal berita yang perlu{" "}
          <span style={{ fontWeight: 700 }}>ditelusuri kebenerannya,</span>{" "}
          sangat cocok untuk anda yang suka{" "}
          <span style={{ fontWeight: 700 }}>mengungkap fakta</span>”
        </Typography>
      </Box>
    </>
  );
}
