import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import * as Yup from 'yup';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Input from '../Components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser, updateProfileUser } from '../Features/authSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { Loading } from './Home';

const ProfileSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name Is Required').min(3, 'Too Short!'),
  noTelp: Yup.number().required('No Handphone Is Required'),
  address: Yup.string().required('Address Is Required'),
  email: Yup.string().required('Email Is Required').email('Invalid email'),
});

const Profile = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { profile, statusProfile, statusUpdateProfile } = useSelector(
    (state) => state.auth,
  );
  console.log('profile', profile)
  const initialInput = {
    fullName: profile.fullName,
    email: profile.email,
    noTelp: profile.noTelp,
    address: profile.address,
    photo: profile?.photo || '',
  };

  const [user] = useAuthState(auth);

  useEffect(() => {
    dispatch(getProfileUser(user?.uid));
  }, [user]);


  const handleSubmit = (values) => {
    dispatch(updateProfileUser({
      id: user.uid,
      data : values
    }));
    dispatch(getProfileUser(user?.uid));
  };
  return (
    <>
      {statusProfile === 'loading' ? (
        <Loading />
      ) : (
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
                Profile
              </Typography>
              <Formik
                initialValues={initialInput}
                validationSchema={ProfileSchema}
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
                            disabled={true}
                            value={values.email}
                            onChange={handleChange('email')}
                            label={'Email'}
                            type={'text'}
                            placeholder={'Input Your Email'}
                            messageError={
                              errors.email && touched.email
                                ? errors.email
                                : null
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
                              errors.noTelp && touched.noTelp
                                ? errors.noTelp
                                : null
                            }
                            error={
                              errors.noTelp && touched.noTelp ? true : false
                            }
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
                            error={
                              errors.address && touched.address ? true : false
                            }
                          />
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Input
                            name={'photo'}
                            value={values.photo}
                            onChange={handleChange('photo')}
                            label={'Url Photo'}
                            type={'text'}
                            placeholder={'Input Your Address'}
                            messageError={
                              errors.photo && touched.photo
                                ? errors.photo
                                : null
                            }
                            error={errors.photo && touched.photo ? true : false}
                          />
                        </Grid>
                      </Grid>
                      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Button
                          variant='contained'
                          style={{ display: 'block', width: '100%' }}
                          type={'submit'}
                          disabled={
                            statusUpdateProfile === 'loading' ? true : false
                          }
                        >
                          {statusUpdateProfile === 'loading'
                            ? 'Loading...'
                            : 'Submit'}
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
                    </Form>
                  );
                }}
              </Formik>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Profile;
