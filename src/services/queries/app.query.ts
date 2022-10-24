import { useQuery } from '@tanstack/react-query';
import type { App, DetailApp, GetAppsProps, GetDetailApp } from '@/types/app';
import { getApps, getDetailApp } from '../api/app.service';

export const useAppsQuery = (params: GetAppsProps) =>
  useQuery<App[]>(['getApps', { params }], async () => {
    const res = await getApps(params);
    return res;
  });

export const useDetailAppQuery = (params: GetDetailApp) =>
  useQuery<DetailApp>(['getDetailApp', { params }], async () => {
    const res = await getDetailApp(params);
    return res;
  });
