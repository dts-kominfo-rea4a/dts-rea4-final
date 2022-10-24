
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { Link as RouterLink } from 'react-router-dom';
import '@fontsource/roboto/400.css'

import { strengthColor, strengthIndicator } from '../utils/password-strength';
import {
    Box,
    Button,
    Stack,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    IconButton,
    InputAdornment,
    Divider,
    Grid, Typography,
    FormControl,
} from '@mui/material';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

//import project
import AuthTheme from '../theme/AuthTheme';
import FirebaseSocial from './FirebaseLogin';
import { registrasiEmailPassowrd } from "../auth/firebase";



function RegisterPage() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);
    useEffect(() => {
        if (loading) {
            return;
        }
        //jika null redirect login
        if (user) {
            navigate("/");
            return;
        }
    }, [user, loading]);
    return (

        <AuthTheme>
            <Stack direction="row" justifyContent="space-between" paddingBottom={4} alignItems="baseline"
                sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                <Typography variant="h5">Sign up</Typography>

                <Link
                    to="/login"

                >
                    <Typography margin="normal" variant="caption" sx={{ textDecoration: 'none' }} color="primary">
                        Already have an account?
                    </Typography>
                </Link>

            </Stack>
            <Grid item xs={12}>
                <Formik
                    initialValues={{

                        email: '',
                        password: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                        password: Yup.string().max(255).required('Password is required')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {

                            const createAccount = registrasiEmailPassowrd(values.email, values.password);
                            if (!(await createAccount).success) {
                                setStatus({ success: false });
                                setErrors({ submit: (await createAccount).message });
                                setSubmitting(false);
                            } 
                            // setErrors({ submit: 'error bor' });
                            // setStatus({ success: false });
                            // setSubmitting(false);
                        } catch (err) {
                            // console.error(err);
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>

                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-signup" sx={{ fontSize: 12 }}>Email Address*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.email && errors.email)}
                                            id="email-login"
                                            type="email"
                                            value={values.email}
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="name@dts.com"
                                            inputProps={{}}
                                        />
                                        {touched.email && errors.email && (
                                            <FormHelperText error id="helper-text-email-signup">
                                                {errors.email}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel sx={{ fontSize: 12 }} htmlFor="password-signup">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="password-signup"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                                changePassword(e.target.value);
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        size="large"
                                                    >
                                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="******"
                                            inputProps={{}}
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="helper-text-password-signup">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <FormControl fullWidth sx={{ mt: 2 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item>
                                                <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" fontSize="0.75rem">
                                                    {level?.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </Grid>
                                {/* <Grid item xs={12}>
                                        <Typography variant="body2">
                                            By Signing up, you agree to our &nbsp;
                                            <Link variant="subtitle2" component={RouterLink} to="#">
                                                Terms of Service
                                            </Link>
                                            &nbsp; and &nbsp;
                                            <Link variant="subtitle2" component={RouterLink} to="#">
                                                Privacy Policy
                                            </Link>
                                        </Typography>
                                    </Grid> */}

                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Create Account
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider>
                                        <Typography variant="caption">Sign up with</Typography>
                                    </Divider>
                                </Grid>

                            </Grid>
                        </form>
                    )}
                </Formik>
            </Grid>

            {/* //untuk login dari google */}
            <Grid item xs={12} justifyContent={'center'}>
                <FirebaseSocial />
            </Grid>


        </AuthTheme>
    );
}

export default RegisterPage;