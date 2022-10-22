export type AppsCategories =
  | 'mmorpg'
  | 'shooter'
  | 'strategy'
  | 'moba'
  | 'racing'
  | 'sports'
  | 'social'
  | 'sandbox'
  | 'open-world'
  | 'survival'
  | 'pvp'
  | 'pve'
  | 'pixel'
  | 'voxel'
  | 'zombie'
  | 'turn-based'
  | 'first-person'
  | 'third-Person'
  | 'top-down'
  | 'tank'
  | 'space'
  | 'sailing'
  | 'side-scroller'
  | 'superhero'
  | 'permadeath'
  | 'card'
  | 'battle-royale'
  | 'mmo'
  | 'mmofps'
  | 'mmotps'
  | '3d'
  | '2d'
  | 'anime'
  | 'fantasy'
  | 'sci-fi'
  | 'fighting'
  | 'action-rpg'
  | 'action'
  | 'military'
  | 'martial-arts'
  | 'flight'
  | 'low-spec'
  | 'tower-defense'
  | 'horror'
  | 'mmorts';

export type AppPlatforms = 'pc' | 'browser' | 'all';

export type AppsSortBy =
  | 'release-date'
  | 'popularity'
  | 'alphabetical '
  | 'relevance';

export interface GetAppsProps {
  category?: AppsCategories;
  platform?: AppPlatforms;
  'sort-by'?: AppsSortBy;
  search?: string;
}

export interface App {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: '2022-10-04';
  freetogame_profile_url: 'https://www.freetogame.com/overwatch-2';
}
