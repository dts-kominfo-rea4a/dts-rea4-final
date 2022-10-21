
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import React from "react";
// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';
// assets
import Google from '../assets/images/google.svg';

import { grey } from '@mui/material/colors';
// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //


import {
    signInEmail,
    signInWithGoogle,
    signInWithGitHub,
} from "../auth/firebase";
const FirebaseSocial = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const googleHandler = async () => {
        signInWithGoogle();
        // login || singup
    };


    return (
        <Stack
            justifyContent={"center"}
            direction="row"
            spacing={matchDownSM ? 1 : 2}
            marginTop={2}
            // justifyContent={matchDownSM ? 'space-around' : 'space-between'}
            sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
        >
            <Button
                variant="outlined"
                // fullWidth={!matchDownSM}
                startIcon={<img src={Google} alt="Google" />}
                onClick={googleHandler}
                sx={{color:grey}}
            >   
                {!matchDownSM && 'Google'}
            </Button>

        </Stack>
    );
};

export default FirebaseSocial;
