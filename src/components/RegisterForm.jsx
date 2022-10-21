import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { 
  auth,
  registerWithEmailAndPass
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import styles from "./LoginOrRegisterForm.module.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, isLoading, error] = useAuthState(auth);

  const buttonOnCLickHanler = (evt) => {
    evt.preventDefault();
    registerWithEmailAndPass(email, password);
  };

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  // Kita gunakan.... useEffect !
  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url("images/background.jpeg")`,
          backgroundPosition: "left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "95vh" }}
        >
          <Grid item xs={6} md={6} lg={6} xl={6} sx={{ margin: "auto" }}>
            <Box className={styles.boxy}>
              <Typography variant="body1">Register Form</Typography>
              <Box className={styles.form} component="form">
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={inputEmailOnChangeHandler}
                />

                <TextField
                  label="password"
                  type="Password"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={password}
                  width={100}
                  onChange={inputPasswordOnChangeHandler}
                />

                <Button variant="contained" onClick={buttonOnCLickHanler}>
                  Register
                </Button>
              </Box>

              <Link
                to="/login"
                className="underline text-blue-400 hover:text-blue-500"
              >
                <Typography variant="body1">Wanna login?</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RegisterForm;
