import { StateCreator } from 'zustand';
import type { AuthSlice } from '@/types/store';
import type { Store } from '@/store/index';
import { User } from 'firebase/auth';

export const createAuthSlice: StateCreator<
  Store,
  [['zustand/persist', unknown]],
  [],
  AuthSlice
> = (set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) =>
    set(() => ({ isAuthenticated })),
  user: null,
  setUser: (user: User | null) => set(() => ({ user })),
});
