import create from "zustand";
import tmdbApi from "../apis/tmdbApi";

// slice
const tmdbSlice = (set) => ({
  // state
  weeklyTrending: [],
  netflixOriginal: [],
  moviePopular: [],
  movieTopRated: [],
  movieNowPlaying: [],
  movieUpcoming: [],
  // action
  fetchWeeklyTrending: async () => {
    try {
      const {data} = await tmdbApi("trending/all/week");
      set({weeklyTrending: data.results})
    } catch (error) {
      console.log("Weekly Treanding:", error)
    }
  },
  fetchNetflixOriginal: async () => {
    try {
      const {data} = await tmdbApi("discover/tv");
      set({netflixOriginal: data.results})
    } catch (error) {
      console.log("Netflix Original:", error)
    }
  },
  fetchMovies: async (category) => {
    try {
      const { data } = await tmdbApi.get(`movie/${category}`);
      if (category === "popular") {
        set({ moviePopular: data.results });
      } else if (category === "top_rated") {
        set({ movieTopRated: data.results });
      } else if (category === "now_playing") {
        set({ movieNowPlaying: data.results });
      } else if (category === "upcoming") {
        set({ movieUpcoming: data.results });
      }
    } catch (error) {
      console.log("Movies:", error);
    }
  },
});

// hooks
const useTmdbStore = create(tmdbSlice);

// export state selector
export const selectWeeklyTrending = (state) => state.weeklyTrending;
export const selectNetflixOriginal = (state) => state.netflixOriginal;
export const selectMoviePopular = (state) => state.moviePopular;
export const selectMovieTopRated = (state) => state.movieTopRated;
export const selectMovieNowPlaying = (state) => state.movieNowPlaying;
export const selectMovieUpcoming = (state) => state.movieUpcoming;
// export action selector
export const selectFetchWeeklyTrending = (state) => state.fetchWeeklyTrending;
export const selectFetchNetflixOriginal = (state) => state.fetchNetflixOriginal;
export const selectFetchMovies = (state) => state.fetchMovies;

// export hooks
export default useTmdbStore;
