import React, { useState, useEffect } from "react";
import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { auth, login, registration } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const LoginAndRegister = ({ loginOrRegister }) => {
  // gunakan hooks useNavigate
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [user, isLoading] = useAuthState(auth);

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
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
    login(credential.email, credential.password);
  };

  const registerHandler = () => {
    registration(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
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
      navigate("/");
    }
  }, [user, isLoading, navigate]);
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "95vh" }}>
      <Box className={styles.boxy} component="form" noValidate>
        <Typography variant="body1">{loginOrRegister === "register" ? "Registration" : "Login"}</Typography>

        <TextField label="Email" type="email" variant="outlined" size="small" value={credential.email} onChange={textFieldEmailOnChangeHandler} />

        <TextField label="password" type="Password" variant="outlined" size="small" value={credential.password} onChange={textFieldPasswordOnChangeHandler} />

        <Button variant="outlined" size="small" onClick={buttonLoginOrRegisterOnClickHandler}>
          {loginOrRegister === "register" ? "Register" : "Login"}
        </Button>

        {loginOrRegister === "register" ? (
          <Link to="/Login">
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        ) : (
          <Link to="/Register">
            <Typography variant="body1">or do you want Registration ?</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginAndRegister;
