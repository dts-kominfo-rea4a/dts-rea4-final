import React, { useState, useEffect } from "react";
import { Link as useLocation, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import {
  auth,
  signInDenganEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  let isSubmitting = false;

  const [user, isLoading, error] = useAuthState(auth);

  const [showPassword, setShowPassword] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    isSubmitting = true;
    signInDenganEmailAndPassword(credential.email, credential.password);
    isSubmitting = false;
    navigate("/home");
  };

  const registerHandler = () => {
    isSubmitting = true;
    registerWithEmailAndPassword(credential.email, credential.password);
    isSubmitting = false;
    navigate("/login");
  };

  const loginOnClickHandler = (event) => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/home");
    }
  }, [user, isLoading, navigate]);

  return (
    <Box
      animate={{
        transition: {
          staggerChildren: 0.55,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={animate}
      >
        <TextField
          fullWidth
          autoComplete="username"
          type="email"
          label="Email Address"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />

        <TextField
          fullWidth
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          label="Password"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />
      </Box>

      <Box initial={{ opacity: 0, y: 20 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Link variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={loginOnClickHandler}
        >
          {isSubmitting
            ? "loading..."
            : loginOrRegister === "login"
            ? "Login"
            : "Register"}
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
