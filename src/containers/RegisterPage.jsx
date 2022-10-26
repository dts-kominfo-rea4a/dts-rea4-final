import React, {useState} from "react";

// import LoginForm from "../components/Auth/LoginForm";
import {Box, Divider, Typography, TextField} from "@mui/material"
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import { Stack, Button, IconButton } from "@mui/material";

import { register, signInWithGoogle } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";


const RootStyle = styled("div")({
    background: "rgb(213, 235, 250 )",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    fontFamily: "Poppins"
});


const HeadingStyle = styled(Box)({
    textAlign: "center",
});

const ContentStyle = styled("div")({
    maxWidth: 480,
    padding: 25,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#fff",
    variant: 'rounded'
});

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




const RegisterPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formOnSubmitHandler = async (evt) => {
        evt.preventDefault();
        await register(email,password);
        
        navigate("/")
    };

    const inputEmailOnChangeHandler = (evt) => {
        setEmail(evt.target.value);
    };

    const inputPasswordOnChangeHandler = (evt) => {
        setPassword(evt.target.value);
    };

    const googleOnClickHandler = async (evt) => {
        await signInWithGoogle();
        navigate("/")
    };

    return (
        <RootStyle>
            <Container maxWidth='sm' >
            <ContentStyle sx={{
                borderRadius : '10px'
            }}>
                <HeadingStyle >
                <Box>
                    <Link to="/">
                        <Box component="img" src="/logo.png" alt="logo" height="100px"/>
                    </Link>
                    
                </Box>
                    <Typography sx={{ color: "text.secondary", mb: 5 }}>
                        Sign Up with
                    </Typography>
                </HeadingStyle>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <IconButton
                            sx={{
                                border: "2px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5675rem",
                                flex: 1,
                            }}
                            onClick={googleOnClickHandler}
                        >
                            <Icon icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                        </IconButton>
                    </Stack>
                </Box>
                <Divider sx={{ my: 3 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    OR Register
                    </Typography>
                </Divider>
                <form onSubmit={formOnSubmitHandler}>
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
                            value={email}
                            onChange={inputEmailOnChangeHandler}
                            />

                            <TextField
                            fullWidth
                            autoComplete="current-password"
                            type="password"
                            label="Password"
                            value={password}
                            onChange={inputPasswordOnChangeHandler}
                            />
                        </Box>

                        <Box
                        
                            initial={{ opacity: 0, y: 20 }}
                            animate={animate}
                        >
                            <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ my: 2 }}
                            >
                            
                            </Stack>

                            <Button
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            >
                            Register
                            </Button>
                        </Box>
                    </Box>
                </form>
                <Typography
                    
                    variant="body2"
                    align="center"
                    sx={{ mt: 3 }}
                >
                    Already have an account?{" "}
                    <Link variant="subtitle2" to="/login">
                        Log In
                    </Link>
                </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
};

export default RegisterPage;
