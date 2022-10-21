import create from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthSlice } from '@/types/store';
import { createAuthSlice } from './createAuthSlice';

export type Store = AuthSlice;

export const useStore = create<Store>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    { name: 'catugy-storage' }
  )
);
