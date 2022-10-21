
import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from "react-router-dom";
import '@fontsource/roboto/400.css'

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
    FormControlLabel,
    Checkbox,
    ButtonProps, Container, Grid, TextField, Typography
} from '@mui/material';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

//import project
import AuthTheme from '../theme/AuthTheme';
import FirebaseSocial from './FirebaseLogin';

import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import {
    signInEmail,
    signInWithGoogle,
} from "../auth/firebase";


function LoginPage() {
    
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    // const formOnSubmitHandler = (evt) => {
    //     evt.preventDefault();
    //     // signInEmail(email, password);
    //     // console.log(email)
    //     console.log(showPassword)
    // };

    const [checked, setChecked] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
                    <Typography variant="h5">Login</Typography>

                    <Link
                        to="/register"

                    >
                        <Typography margin="normal" variant="caption" sx={{ textDecoration: 'none' }} color="primary">
                            Don&apos;t have an account?
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
                                signInEmail(values.email, values.password);
                                setStatus({ success: true });
                                setSubmitting(false);
                            } catch (err) {
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={3} >
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel sx={{ fontSize: 12 }} htmlFor="email-login">Email Address</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="email"
                                                value={values.email}
                                                name="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter email address"
                                                fullWidth
                                                error={Boolean(touched.email && errors.email)}
                                            />
                                            {touched.email && errors.email && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {errors.email}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel sx={{ fontSize: 12 }} htmlFor="password-login">Password</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.password && errors.password)}
                                                id="-password-login"
                                                type={showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                name="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
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
                                                placeholder="Enter password"
                                            />
                                            {touched.password && errors.password && (
                                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                                    {errors.password}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>


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
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider>
                                            <Typography variant="caption"> Login with</Typography>
                                        </Divider>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Grid>

                {/* //untuk login dari google */}
                <Grid item xs={12} >
                    <FirebaseSocial />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        type={'text'} variant='outlined' placeholder='Email' />
                    <TextField
                        margin="normal" type={'password'} variant='outlined' placeholder='Password' />
                    <Button
                        variant='contained' color='primary'
                        sx={{
                            marginTop: 3, borderRadius: 1
                        }}
                    >Login</Button>
                    <Button

                        sx={{
                            marginTop: 3, borderRadius: 1
                        }}
                    >Login</Button>
                </Grid> */}

        </AuthTheme>
    );
}

export default LoginPage;