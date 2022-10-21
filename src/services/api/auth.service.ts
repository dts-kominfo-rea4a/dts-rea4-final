import type { LoginBody, RegisterBody } from '@/types/auth';
import { app } from '@/lib/firebase-config';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';
import { authEN } from '@/lib/firebase-error-en';

const handleAction = async (
  id: number,
  body: LoginBody | RegisterBody
): Promise<boolean> => {
  const authentication = getAuth(app);

  try {
    if (id === 1) {
      const response = await signInWithEmailAndPassword(
        authentication,
        body.email,
        body.password
      );
      // set token to the sessionStorage
      sessionStorage.setItem('Auth Token', response.user.refreshToken);
      return true;
    } else if (id === 2) {
      const response = await createUserWithEmailAndPassword(
        authentication,
        body.email,
        body.password
      );
      // set token to the sessionStorage
      sessionStorage.setItem('Auth Token', response.user.refreshToken);
      return true;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code.replace('auth/', '');
      const translation = authEN[errorCode];
      toast.error(translation, { theme: 'colored' });
    }
    return false;
  }

  return false;
};

// Dummy login request that will resolve in 2 seconds
export const login = (body: LoginBody) => {
  const res: Promise<boolean> = handleAction(1, body);
  return res;
};

export const register = (body: RegisterBody) => {
  const res: Promise<boolean> = handleAction(2, body);
  return res;
};
