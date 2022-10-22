import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import * as Yup from 'yup';
import {useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import Input from '../Components/Input';
import LinkText from '../Components/LinkText';
import { useDispatch, useSelector } from 'react-redux';
import { postRegisterAction } from '../Features/authSlice';
import cogoToast from 'cogo-toast';

const LoginSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name Is Required').min(3, 'Too Short!'),
  noTelp: Yup.number().required('No Handphone Is Required'),
  address: Yup.string().required('Address Is Required'),
  email: Yup.string().required('Email Is Required').email('Invalid email'),
  password: Yup.string()
    .required('Password Required').min(8, 'Password Minimal 8 Karakter!'),
  confirmPassword: Yup.string()
    .required('Confirm Password Required')
    .when('password', {
      is: (val) => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Kedua password tidak sama',
      ),
    }),
});

const initialInput = {
  fullName: '',
  email: '',
  noTelp: '',
  address: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const dispatch = useDispatch();
  
  const { statusRegister } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = (name) => {
    if (name === 'password') {
      setShowPassword(!showPassword);
    }
    if (name === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values) => {
    dispatch(postRegisterAction(values));
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card sx={{ padding: '20px', width: '800px' }}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            style={{ textAlign: 'center', fontWeight: 'bold' }}
          >
            Register
          </Typography>
          <Formik
            initialValues={initialInput}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
            enableReinitialize={true}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              resetForm,
              handleSubmit,
            }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Input
                        name={'fullName'}
                        value={values.fullName}
                        onChange={handleChange('fullName')}
                        label={'Fulll Name'}
                        type={'text'}
                        placeholder={'Input Your Full Name'}
                        messageError={
                          errors.fullName && touched.fullName
                            ? errors.fullName
                            : null
                        }
                        error={
                          errors.fullName && touched.fullName ? true : false
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        name={'email'}
                        value={values.email}
                        onChange={handleChange('email')}
                        label={'Email'}
                        type={'text'}
                        placeholder={'Input Your Email'}
                        messageError={
                          errors.email && touched.email ? errors.email : null
                        }
                        error={errors.email && touched.email ? true : false}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Input
                        name={'noTelp'}
                        value={values.noTelp}
                        onChange={handleChange('noTelp')}
                        label={'No Handphone'}
                        type={'number'}
                        placeholder={'Input Your No Handphone'}
                        messageError={
                          errors.noTelp && touched.noTelp ? errors.noTelp : null
                        }
                        error={errors.noTelp && touched.noTelp ? true : false}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        name={'address'}
                        value={values.address}
                        onChange={handleChange('address')}
                        label={'Address'}
                        type={'text'}
                        placeholder={'Input Your Address'}
                        messageError={
                          errors.address && touched.address
                            ? errors.address
                            : null
                        }
                        error={errors.address && touched.address ? true : false}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Input
                        name={'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        type={'password'}
                        kindPass={showPassword ? 'text' : 'password'}
                        childPass={
                          showPassword ? <VisibilityOff /> : <Visibility />
                        }
                        handleClickShowPassword={() =>
                          handleClickShowPassword('password')
                        }
                        handleMouseDownPassword={handleMouseDownPassword}
                        placeholder={'Input Your Password'}
                        error={
                          errors.password && touched.password ? true : false
                        }
                        messageError={
                          errors.password && touched.password
                            ? errors.password
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        name={'confirmPassword'}
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        type={'password'}
                        kindPass={showPassword ? 'text' : 'password'}
                        childPass={
                          showPassword ? <VisibilityOff /> : <Visibility />
                        }
                        handleClickShowPassword={() =>
                          handleClickShowPassword('confirmPassword')
                        }
                        handleMouseDownPassword={handleMouseDownPassword}
                        placeholder={'Input Your Password'}
                        error={
                          errors.confirmPassword && touched.confirmPassword
                            ? true
                            : false
                        }
                        messageError={
                          errors.confirmPassword && touched.confirmPassword
                            ? errors.confirmPassword
                            : null
                        }
                      />
                    </Grid>
                  </Grid>
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Button
                      variant='contained'
                      style={{ display: 'block', width: '100%' }}
                      type={'submit'}
                      disabled={statusRegister === 'loading' ? true : false}
                    >
                      {statusRegister === 'loading' ? 'Loading...' : 'Submit'}
                    </Button>
                    <Button
                      variant='contained'
                      color='error'
                      style={{
                        display: 'block',
                        width: '100%',
                        marginTop: '14px',
                      }}
                      onClick={() => resetForm()}
                    >
                      Reset
                    </Button>
                  </div>
                  <Typography variant='caption'>
                    you already have an account?{' '}
                    <Link to='/login'>
                      <LinkText title={'Login'} styles={{ fontSize: '13px' }} />
                    </Link>
                  </Typography>
                </Form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
