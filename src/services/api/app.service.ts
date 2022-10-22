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
  if (params.search && params.search.length) {
    const { search } = params;
    const filteredData = data.filter(
      (game) => game.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );
    return filteredData;
  }

  return data;
};
