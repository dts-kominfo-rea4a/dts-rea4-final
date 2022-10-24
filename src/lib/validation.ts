import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please input a valid email'),
  password: yup.string().required('Password is required'),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please input a valid email'),
  password: yup.string().required('Password is required'),
});
