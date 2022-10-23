import * as Yup from 'yup';
import Cookies from 'js-cookie';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import {useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import Input from '../Components/Input';
import LinkText from '../Components/LinkText';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginAction } from '../Features/authSlice';
import cogoToast from 'cogo-toast';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email Is Required').email('Invalid email'),
  password: Yup.string()
    .required('Password Is Required')
    .min(8, 'Password Minimal 8 Character'),
});

const initialInput = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { statusLogin } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (statusLogin === 'error') {
      cogoToast.error('Anda Gagal Login, Tolong Cek lagi data Anda');
    }
    if (statusLogin === 'success') {
      navigate('/news');
      cogoToast.success('Anda Berhasil Login');
    }
  }, [statusLogin, navigate]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values) => {
    dispatch(postLoginAction(values));
  };
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card sx={{ padding: '20px', width: '600px' }}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            style={{ textAlign: 'center', fontWeight: 'bold' }}
          >
            Login
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
                  <Input
                    name={'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    type={'password'}
                    kindPass={showPassword ? 'text' : 'password'}
                    childPass={
                      showPassword ? <VisibilityOff /> : <Visibility />
                    }
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    placeholder={'Input Your Password'}
                    error={errors.password && touched.password ? true : false}
                    messageError={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                  <LinkText
                    title={'Forgot Password ?'}
                    styles={{ fontSize: '13px' }}
                  />
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Button
                      variant='contained'
                      style={{ display: 'block', width: '100%' }}
                      type={'submit'}
                      disabled={statusLogin === 'loading' ? true : false}
                    >
                      {statusLogin === 'loading' ? 'Loading...' : 'Submit'}
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
                    do you already have an account?{' '}
                    <Link to='/register'>
                      <LinkText
                        title={'Register'}
                        styles={{ fontSize: '13px' }}
                      />
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

export default Login;
