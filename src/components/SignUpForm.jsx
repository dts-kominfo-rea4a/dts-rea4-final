import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as LinkNav } from "react-router-dom";
import { signUpWithPassword } from "../authentications/firebaseAuth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeHandler = (event) => {
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    signUpWithPassword(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
        >
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={onSubmitHandler}
          sx={{ mt: 1 }}
        >
          <TextField
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandler}
            value={email}
          />
          <TextField
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangeHandler}
            value={password}
          />
          <Button
            color="secondary"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link
            component={LinkNav}
            to="/signIn"
            variant="body2"
            sx={{ color: "#444444" }}
          >
            Already have an account? Click to sign In
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;
