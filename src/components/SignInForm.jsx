import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import {auth, signInWithEmailAndPassword } from '../authentication/firebase';

export default function SignInForm() {
  return (
    <>
      <Box sx={{ p: "40px 0px" }}>
        <Typography variant="h6" fontWeight="700" color="primary.dark">
          Sign In
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: "40px 0px",
          }}
        >
          <TextField
            required
            id="email"
            label="Email"
            placeholder="Email"
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
          >
            Password
          </TextField>
          <Box sx={{ display: "inline-flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{
                p: "15px 30px",
                display: "flex",
              }}
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
