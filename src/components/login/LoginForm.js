import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";

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

const LoginForm = ({ setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const isSubmitting = false;

  const [showPassword, setShowPassword] = useState(false);

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
        />

        <TextField
          fullWidth
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          label="Password"
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
        >
          {isSubmitting ? "loading..." : "Login"}
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
