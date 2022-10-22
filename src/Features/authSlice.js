import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cogoToast from 'cogo-toast';

const auth = getAuth();
const db = getDatabase();

const initialState = {
  statusRegister :'idle',
  dataRegister: {},
  errorRegister: null,
  statusLogin: false,
  dataLogin: {},
  errorLogin: null,
};

export const postRegisterAction = createAsyncThunk(
  'auth/register',
  async (data) => {
    try {
      const result = await createUserWithEmailAndPassword(
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
      set(ref(db, `users/${result.user.uid}`), dataUser);
      cogoToast.success('Anda Berhasil register');
      return result;
    } catch (err) {
      console.log('err Register', err);
      cogoToast.error('Anda Gagal Register Akun, Tolong Cek lagi data Anda');
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
      cogoToast.success('Anda Berhasil Login');
      return result;
    } catch (err) {
      console.log('err Register', err);
      cogoToast.error('Anda Gagal Register Akun, Tolong Cek lagi data Anda');
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
        state.statusRegister = 'success';
        state.dataRegister = action.payload;
      })
      .addCase(postRegisterAction.rejected, (state, action) => {
        state.statusRegister = 'error';
        state.errorRegister = action.payload.error;
      })
      .addCase(postLoginAction.pending, (state) => {
        state.statusLogin = 'loading';
      })
      .addCase(postLoginAction.fulfilled, (state, action) => {
        state.statusLogin = 'success';
        state.dataLogin = action.payload;
      })
      .addCase(postLoginAction.rejected, (state, action) => {
        state.statusLogin = 'error';
        state.errorLogin = action.payload.error;
      });
  },
});

export default authSlice.reducer;
