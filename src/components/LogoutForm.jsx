import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function LogoutForm() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "40px 0px",
          gap: "20px",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/asset-logout.svg"}
          alt="asset-logout"
        />
        <Typography fontSize="16px" textAlign="center">
          Are you sure want to <span style={{ fontWeight: 700 }}>log out?</span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            p: "20px 9px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              p: "15px 30px",
              color: "white",
            }}
          >
            <Typography fontWeight="700">SURE</Typography>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              p: "15px 30px",
            }}
          >
            <Typography fontWeight="700">MM, NO</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
