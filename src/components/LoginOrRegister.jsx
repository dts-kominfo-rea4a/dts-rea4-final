// Membutuhkan state untuk meng-track value dari TextField
import React, { useState, useEffect } from "react";

// Gunakan .module.css untuk mendapatkan scoped css
// import styles from "./LoginOrRegisterForm.module.css";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Karena nantinya kita bisa berpindah ke halaman LoginPage (setelah Register)
// ataupun ke halaman HomePage (setelah Login), maka kita bisa memanfaatkan useNavigate
import { useNavigate } from "react-router-dom";

import { 
    auth,
    regWithEmail,
    signInWithEmail,
    logOut,
 } from "../auth/firebase";

import{ useAuthState} from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  // gunakan hooks useNavigate
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [user, isLoading, error]= useAuthState(auth);

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
    // console.log("Login");
    // navigate("/");
    signInWithEmail(credential.email, credential.password)
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");
    regWithEmail(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(()=>{
    if(isLoading){

    }
    if(user){
        navigate("/");
    }

  })

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh" }}
    >
      <Box sx={{border: "1px dashed grey",
            padding: "1em",
            display: "inherit",
            flexDirection: "column",
            
            gap: '1em',}} 
            component="form" noValidate>
        <Typography variant="body1">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />

        <TextField
          label="password"
          type="Password"
          variant="outlined"
          size="small"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />

        <Button
          variant="outlined"
          size="small"
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>

        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">or do you want Register ?</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginOrRegisterForm;