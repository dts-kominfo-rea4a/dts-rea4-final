import Cookies from 'js-cookie';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {auth} from "../Firebase";
import cogoToast from 'cogo-toast';


const db = getDatabase();

const initialState = {
  statusRegister: 'idle',
  dataRegister: {},
  errorRegister: null,
  statusLogin: 'idle',
  dataLogin: {},
  errorLogin: null,
  profile :{},
  statusProfile: 'idle',
  errorProfile: null,
  statusUpdateProfile:'idle',
  errorUpdateProfile:null
};

export const postRegisterAction = createAsyncThunk(
  'auth/register',
  async (data) => {
    console.log(data)
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
      cogoToast.success('Anda Berhasil Register Akun');
      set(ref(db, `users/${result.user.uid}`), dataUser);
      auth.displayName = data.fullName;
      return result;
    } catch (err) {
      console.log('err Register', err);
      cogoToast.error('Anda Gagal Regsiter Akun');
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
      Cookies.set('token', result.user.accessToken);
      Cookies.set('name', result.user.email);
      cogoToast.success('Anda Berhasil Login');
      return result;
    } catch (err) {
      cogoToast.error('Anda Gagal Login, Tolong Cek lagi data Anda');
      console.log('err login', err);
    }
  },
);

export const postLogoutAction = createAsyncThunk(
    'auth/logout',
    async () => {
      try {
        await signOut(auth);
        Cookies.remove('token');
        Cookies.remove('name');
      } catch (err) {
        console.log(err);
      }
    }
)

export const getProfileUser = createAsyncThunk('auth/profile', async (userId) => {
 const starCountRef = ref(db, `users/${userId}`);
 return new Promise((resolve) => {
   onValue(starCountRef, (snapshot) => {
     onValue(starCountRef, (snapshot) => {
       resolve(snapshot.val());
     });
   });
 });
});

export const updateProfileUser = createAsyncThunk(
  'auth/udpdateProfile',
  async (data) => {
    set(ref(db, `users/${data.id}`), data.data)
      .then(() => {cogoToast.success('Anda Berhasil Update Profile')})
      .catch((err) => {
        console.log('err', err)
        cogoToast.success('Anda Gagal Update Profile');
      });
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
        console.log('action', action);
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
        if (action.payload) {
          state.statusLogin = 'success';
        }
        if (!action.payload) {
          state.statusLogin = 'error';
        }
      })
      .addCase(postLoginAction.rejected, (state, action) => {
        state.statusLogin = 'error';
        state.errorLogin = action.payload;
      })
      .addCase(postLogoutAction.pending, (state) => {
        state.logout = 'loading';
      })
      .addCase(postLogoutAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.statusLogin = 'idle';
        }
        if (!action.payload) {
          state.statusLogin = 'error';
        }
      })
      .addCase(postLogoutAction.rejected, (state, action) => {
        state.logout = 'error';
        state.errorRegister = action.payload.error;
      })
      .addCase(getProfileUser.pending, (state) => {
        state.statusProfile = 'loading';
      })
      .addCase(getProfileUser.fulfilled, (state, action) => {
        console.log('action profile', action);
        if (action.payload) {
          state.statusProfile = 'success';
          state.profile = action.payload;
        }
        if (!action.payload) {
          state.statusProfile = 'error';
        }
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        state.updateProfileUser = 'error';
        state.errorProfile = action.payload.error;
      })
      .addCase(updateProfileUser.pending, (state) => {
        state.statusUpdateProfile = 'loading';
      })
      .addCase(updateProfileUser.fulfilled, (state, action) => {
        console.log('action profile', action);
        if (action.payload) {
          state.statusUpdateProfile = 'success';
        }
        if (!action.payload) {
          state.statusUpdateProfile = 'error';
        }
      })
      .addCase(updateProfileUser.rejected, (state, action) => {
        state.statusUpdateProfile = 'error';
        state.errorUpdateProfile = action.payload.error;
      });
  },
});

export default authSlice.reducer;
