import React from "react";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "60px",
        background: "#F3CD0F",
        mt: "50px",
        color: "#BF8300",
      }}
    >
      <Box>
        Copyright <h5 style={{ display: "inline-block" }}>SJ News</h5>
      </Box>
    </Box>
  );
};

export default Footer;
