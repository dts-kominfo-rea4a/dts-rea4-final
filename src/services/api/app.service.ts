import axios from 'axios';
import type { App, DetailApp, GetAppsProps, GetDetailApp } from '@/types/app';

export const getApps = async (params: GetAppsProps): Promise<App[]> => {
  const { data } = await axios.get<App[]>(
    `${import.meta.env.VITE_FREETOGAME_API_URL}/games`,
    {
      params,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_FREETOGAME_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_FREETOGAME_API_HOST,
      },
    }
  );
  if (params.search && params.search.length) {
    const { search } = params;
    const filteredData = data.filter(
      (game) => game.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );
    return filteredData;
  }

  return data;
};

export const getDetailApp = async (
  params: GetDetailApp
): Promise<DetailApp> => {
  const { data } = await axios.get<DetailApp>(
    `${import.meta.env.VITE_FREETOGAME_API_URL}/game`,
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
