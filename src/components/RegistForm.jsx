import { Box, FormControl, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { regist } from "../auth/firebase";

function RegistForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHanler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    regist(email, password);
    navigate("/login");
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
        <Typography>Registrasi</Typography>
        <FormControl sx={{ gap: 2 }}>
          <TextField
            id="outlined-name"
            label="email"
            value={email}
            onChange={emailHandler}
          />
          <TextField
            id="outlined-name"
            type="password"
            label="Password"
            value={password}
            onChange={passwordHanler}
          />
          <Link to="/login">
            <p>Login sekarang </p>
          </Link>
          <Button variant="contained" size="medium" onClick={formSubmit}>
            Kirim
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default RegistForm;
