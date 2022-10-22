import create from "zustand";
import axios from "axios";

const sliceMovie = (set) => ({
  // kali ini statenya berbentuk sebuah object, dan disupport oleh zustand yah !
  // (non primitive value)
  movie: {},
  movieTrendingDay: [],
  movieTrendingWeek: [],
  tvTrendingWeek: [],

  // action berupa async? tanpa middleware !
  // cukup declare action sebagai async, dan bisa berjalan ^_^
  fetchMovie: async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/76341?api_key=28036dc96a89f050276c45424d61cd0f`
    );

    // Karena langsung mengganti, tanpa butuh untuk melihat data lama
    // langsung set state secara direct
    set({ movie: data });
  },

  fetchMovieTrending: async (categories, type) => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/trending/${categories}/${type}?api_key=28036dc96a89f050276c45424d61cd0f`
    );
    if (categories === "movie") {
      if (type === "day") {
        set({ movieTrendingDay: data.results.slice(1, 15) });
      } else if (type === "week") {
        set({ movieTrendingWeek: data.results.slice(1, 15) });
      }
    } else if (categories === "tv") {
      set({ tvTrendingWeek: data.results.slice(1, 15) });
    }
  },
});

// Hooks
const useMovieStore = create(sliceMovie);

// Selectors
export const selectMovie = (state) => state.movie;
export const selectMovieTrendingDay = (state) => state.movieTrendingDay;
export const selectMovieTrendingWeek = (state) => state.movieTrendingWeek;
export const selectTvTrendingWeek = (state) => state.tvTrendingWeek;
export const selectFetchMovie = (state) => state.fetchMovie;
export const selectFetchMovieTrending = (state) => state.fetchMovieTrending;

// export hooks
export default useMovieStore;
