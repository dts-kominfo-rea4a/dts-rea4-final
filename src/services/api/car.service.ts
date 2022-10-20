import axios from 'axios';
import type { App, GetAppsProps } from '@/types/app';

export const getApps = async (params: GetAppsProps): Promise<App[]> => {
  const { data } = await axios.get<App[]>(
    `${import.meta.env.VITE_FREETOGAME_API_URL}`,
    {
      params,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_FREETOGAME_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_FREETOGAME_API_HOST,
      },
    }
  );
  return data;
};
