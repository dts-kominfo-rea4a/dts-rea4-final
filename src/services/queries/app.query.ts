import { useQuery } from '@tanstack/react-query';
import type { App, GetAppsProps } from '@/types/app';
import { getApps } from '../api/app.service';

export const useAppsQuery = (params: GetAppsProps) =>
  useQuery<App[]>(['getApps', { params }], async () => {
    const res = await getApps(params);
    return res;
  });
