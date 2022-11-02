import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as LinkNav } from "react-router-dom";
import { signUpWithPassword } from "../authentications/firebaseAuth";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    content: "",
    severity: "error",
  });

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

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

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await signUpWithPassword(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch {
      setSnackbarState({
        ...snackbarState,
        open: true,
        content: "Invalid email or already registered!",
      });
    }
  };

  let navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth="xs"
    >
      <Snackbar
        anchorOrigin={{
          vertical: snackbarState.vertical,
          horizontal: snackbarState.horizontal,
        }}
        open={snackbarState.open}
        onClose={handleCloseSnackbar}
        key={snackbarState.vertical + snackbarState.horizontal}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity={snackbarState.severity}
          sx={{ width: "100%" }}
        >
          {snackbarState.content}
        </MuiAlert>
      </Snackbar>
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
