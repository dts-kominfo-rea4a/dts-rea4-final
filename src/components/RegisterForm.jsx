import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function RegisterForm() {
  return (
    <>
      <Box sx={{ p: "40px 0px" }}>
        <Typography variant="h6" fontWeight="700" color="secondary.dark">
          Register
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: "40px 0px",
          }}
          color="secondary.dark"
        >
          <TextField
            required
            id="name"
            label="Name"
            placeholder="Name"
            color="secondary"
          >
            Name
          </TextField>
          <TextField
            required
            id="email"
            label="Email"
            placeholder="Email"
            color="secondary"
            type="email"
          >
            Email
          </TextField>
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            color="secondary"
          >
            Password
          </TextField>
          <TextField
            required
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            color="secondary"
          >
            Confirm Password
          </TextField>
          <Box sx={{ display: "inline-flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{
                p: "15px 30px",
                display: "flex",
              }}
              color="secondary"
            >
              <Typography fontWeight="700" color="white">
                Sign In
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
