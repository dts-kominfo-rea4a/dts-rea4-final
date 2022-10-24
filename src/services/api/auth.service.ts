import type { LoginBody, RegisterBody } from '@/types/auth';
import { app } from '@/lib/firebase-config';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  browserSessionPersistence,
  User,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';
import { authEN } from '@/lib/firebase-error-en';

const handleAction = async (
  id: number,
  body: LoginBody | RegisterBody | undefined
): Promise<User | null> => {
  const authentication = getAuth(app);
  await authentication.setPersistence(browserSessionPersistence);

  try {
    if (id === 1 && body) {
      const response = await signInWithEmailAndPassword(
        authentication,
        body.email,
        body.password
      );
      return response.user;
    } else if (id === 2 && body) {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', body.email);

      const response = await createUserWithEmailAndPassword(
        authentication,
        body.email,
        body.password
      );

      // send signInLink to the user's email
      await sendEmailVerification(response.user, {
        url: `${window.location.origin}/`,
      });

      return response.user;
    } else if (id === 3) {
      await authentication.signOut();
      return null;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code.replace('auth/', '');
      const translation = authEN[errorCode];
      toast.error(translation, { theme: 'colored' });
    }
    return null;
  }

  return null;
};

export const login = (body: LoginBody) => {
  const res: Promise<User | null> = handleAction(1, body);
  return res;
};

export const register = (body: RegisterBody) => {
  const res: Promise<User | null> = handleAction(2, body);
  return res;
};

export const logout = () => {
  const res: Promise<User | null> = handleAction(3, undefined);
  return res;
};
