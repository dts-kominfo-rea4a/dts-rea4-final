import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import {
  auth,
  signInWithEmailAndPass,
  signInWithGoogle,
  signInWithGithub,
} from "../authentication/firebase";

import styles from "./LoginOrRegisterForm.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  const buttonOnCLickHanler = (evt) => {
    evt.preventDefault();
    signInWithEmailAndPass(email, password);
  };

  const githubOnClickHandler = (evt) => {
    signInWithGithub();
  };

  const googleOnClickHandler = (evt) => {
    signInWithGoogle();
  };

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
              <Typography variant="body1">Login Form</Typography>
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

                <Button variant="contained" onClick={buttonOnCLickHanler}>Login</Button>
              </Box>
              <Link to="/register">
                <Typography variant="body1">
                  or do you want Register ?
                </Typography>
              </Link>

              <Typography variant="body1">Or sign in with ...</Typography>
              <Box className={styles.otherSignin}>
                <Button variant="outlined" onClick={githubOnClickHandler}>
                  <Icon
                    icon="foundation:social-github"
                    width="24"
                    height="24"
                  />
                  <span>Github</span>
                </Button>

                <Button variant="outlined" onClick={googleOnClickHandler}>
                  <Icon
                    icon="ant-design:google-outlined"
                    width="24"
                    height="24"
                  />
                  <span>Google</span>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LoginForm;
