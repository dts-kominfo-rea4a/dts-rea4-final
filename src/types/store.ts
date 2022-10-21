import { User } from 'firebase/auth';

export interface AuthSlice {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateFromFunctions<T extends [...any]> = T extends [
  infer F,
  ...infer R
]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;
