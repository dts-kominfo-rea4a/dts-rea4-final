import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    Box
    ,Card
    ,CardMedia
    ,TextField
    ,Button
    ,Typography
} from "@mui/material";
import LoginPicture from '../assets/LoginPicture.png';
import {
    auth,
    loginWithEmailPassword,
    registerWithEmailPassword
} from '../authentication/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const LoginAndRegisterForm = ({path}) => {
    const navigate = useNavigate();
    const [user, isLoading, error] = useAuthState(auth);

    const login = {
        background: 'linear-gradient(270.09deg, #000000 50.87%, rgba(217, 217, 217, 0) 84.92%)'
    };

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    const emailOnChange = (event) => {
        setCredential({...credential, email:event.target.value});
    }
    const passwordOnChange = (event) => {
        setCredential({...credential, password:event.target.value});
    }

    const loginHandler = () => {
        loginWithEmailPassword(credential.email, credential.password);
    }
    const registerHandler = () => {
        registerWithEmailPassword(credential.email, credential.password);
    }
    const buttonOnClick = () => {
        if(path === 'login'){
            loginHandler();
        }else if(path === 'register'){
            registerHandler();
        }
    }
    const keypressHandler = (key) => {
        const key_code = key.key;

        if(key_code.toLowerCase() === 'enter'){
            loginHandler();
        }
    }

    useEffect(() => {
        if(isLoading){
            return;
        }

        if(error){
            console.log("there is error", error);
        }

        if(user){
            navigate("/");
        }
    },
    [user, isLoading, error, navigate]
    );

    return (
        <Box sx={{width:'100%'}}>
            <Box sx={{width:'1149px', height:1024, marginRight:'40%', display:'flex', justifyContent:'flex-start', position:'fixed'}}>
                <Card>
                    <CardMedia component="img" image={LoginPicture} alt="login-picture"  sx={{height:1224}} />
                </Card>
            </Box>
            <Box style={login} sx={{width:'1149px', height:1024, paddingLeft:'42%', display:'flex', justifyContent:'flex-end', position:'fixed'}}>
                <Box component="form" noValidate sx={{display:'flex', justifyContent:'flex-start', flexDirection:'column', width:'400px', marginRight:60, marginTop:45, color:'white'}}>
                    <TextField
                        fullWidth
                        error
                        label="EMAIL"
                        id="filled-hidden-email-normal"
                        variant="outlined"
                        sx={{marginBottom:'15px', input: { color: 'red' }}}
                        value={credential.email}
                        onChange={emailOnChange}
                        onKeyDown={keypressHandler}
                    />
                    <TextField
                        fullWidth
                        error
                        type="password"
                        label="PASSWORD"
                        id="filled-hidden-password-normal"
                        variant="outlined"
                        sx={{marginBottom:'30px', input: { color: 'red' }}}
                        value={credential.password}
                        onChange={passwordOnChange}
                        onKeyDown={keypressHandler}
                    />
                    <Button variant="contained" size="large" color="error" onClick={buttonOnClick}>{path === "login" ? "LOGIN" : "REGISTER ACCOUNT"}</Button>
                    {
                        path === "login" ? (
                            <Link to="/register" style={{color:'red'}}>
                                <Typography variant="body1" sx={{color: 'red', marginTop:'20px', display:'flex', flexDirection:'flex-end'}}>or do you want Register ?</Typography>
                            </Link>
                        ) : (
                            <Link to="/login" style={{color:'red'}}>
                                <Typography variant="body1" sx={{color: 'red', marginTop:'20px', display:'flex', flexDirection:'flex-end'}}>or do you want Login ?</Typography>
                            </Link>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default LoginAndRegisterForm;