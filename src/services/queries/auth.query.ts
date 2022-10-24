import { useMutation } from '@tanstack/react-query';
import type { LoginBody, RegisterBody } from '@/types/auth';
import { login, logout, register } from '../api/auth.service';

export const useLoginQuery = () =>
  useMutation(['login'], async (body: LoginBody) => {
    const res = await login(body);
    return res;
  });

export const useRegisterQuery = () =>
  useMutation(['register'], async (body: RegisterBody) => {
    const res = await register(body);
    return res;
  });

export const useLogoutQuery = () =>
  useMutation(['logout'], async () => {
    const res = await logout();
    return res;
  });
