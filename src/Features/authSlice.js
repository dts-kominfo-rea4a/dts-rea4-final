import Cookies from 'js-cookie';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const auth = getAuth();
const db = getDatabase();

const initialState = {
  statusRegister: 'idle',
  dataRegister: {},
  errorRegister: null,
  statusLogin: 'idle',
  dataLogin: {},
  errorLogin: null,
};

export const postRegisterAction = createAsyncThunk(
  'auth/register',
  async (data) => {
    try {
      let result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const dataUser = {
        fullName: data.fullName,
        email: result.user.email,
        uid: result.user.uid,
        noTelp: data.noTelp,
        address: data.address,
      };
      console.log('result register', result);
      set(ref(db, `users/${result.user.uid}`), dataUser);
      auth.displayName = data.fullName;
      return result;
    } catch (err) {
      console.log('err Register', err);
    }
  },
);

export const postLoginAction = createAsyncThunk(
  'auth/login',
  async (values) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log('result', result);
      Cookies.set('token', result.user.accessToken);
      Cookies.set('name', result.user.auth.displayName);
      return result;
    } catch (err) {
      console.log('err Register', err);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logoutAction: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterAction.pending, (state) => {
        state.statusRegister = 'loading';
      })
      .addCase(postRegisterAction.fulfilled, (state, action) => {
        console.log('action', action)
        if (action.payload) {
          state.statusRegister = 'success';
          state.dataRegister = action.payload;
        }
        if (!action.payload) {
          state.statusRegister = 'error';
        }
      })
      .addCase(postRegisterAction.rejected, (state, action) => {
        state.statusRegister = 'error';
        state.errorRegister = action.payload.error;
      })
      .addCase(postLoginAction.pending, (state) => {
        state.statusLogin = 'loading';
      })
      .addCase(postLoginAction.fulfilled, (state, action) => {
        if(action.payload){
          state.statusLogin = 'success';
        }
        if(!action.payload){
          state.statusLogin = 'error';
        }
      })
      .addCase(postLoginAction.rejected, (state, action) => {
         state.statusLogin = 'error';
        state.errorLogin = action.payload;
      });
  },
});

export default authSlice.reducer;
