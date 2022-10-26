import { Box, FormControl, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInEmail } from "../auth/firebase";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    signInEmail(email, password);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          width: 400,
          height: 600,
          textAlign: "center",
        }}
      >
        <Typography>Login</Typography>
        <FormControl sx={{ gap: 2 }}>
          <TextField
            id="outlined-name"
            label="email"
            value={email}
            onChange={emailHandler}
          />
          <TextField
            id="outlined-name"
            label="Password"
            type="password"
            value={password}
            onChange={passwordHandler}
          />
          <Link to="/registrasi">
            <p>Belum punya akun? regsitrasi sekarang </p>
          </Link>
          <Button
            variant="contained"
            size="medium"
            type="submit"
            onClick={formSubmit}
          >
            Kirim
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default LoginForm;
