import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AppFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#F8F8F8",
      }}
    >
      <Typography
        textAlign="center"
        variant="subtitle1"
        gutterBottom
        sx={{ color: "#949494", padding: 3 }}
      >
        Copyright 2022 News Portal
      </Typography>
    </Box>
  );
}
