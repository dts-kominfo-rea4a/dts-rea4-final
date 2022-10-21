import React from "react";
import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <>
      <Box
        sx={{
          p: "10px",
          backgroundColor: "primary.main",
          color: "white",
          display: "inline-flex",
          border: "3px solid",
          borderColor: "primary.main",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          SJ
        </Typography>
      </Box>
      <Box
        sx={{
          p: "10px",
          backgroundColor: "white",
          color: "secondary.main",
          display: "inline-flex",
          border: "3px solid",
          borderColor: "primary.main",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          News
        </Typography>
      </Box>
    </>
  );
}
