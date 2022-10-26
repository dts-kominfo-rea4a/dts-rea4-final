import create from "zustand";
import tmdb from "../apis/tmdb";

// slice
const sliceMovie = (set) => ({
  // state (IMMUTABLE)
  movies: [],
  searchMovies: [],
  trendingMovies: [],
  movie: null,
  isLoading: false,
  error: null,
  totalPages: 0,
  tvs: null,
  tv: null,
  videos: [],

  // actions
  // 1. comot data api
  fetchMovie: async () => {
    try {
      // isLoading = true;
      set({ isLoading: true });

      const { data } = await tmdb.get("discover/movie");
      set((state) => ({
        ...state,
        isLoading: false,
        movies: data.results,
        totalPages: data.total_pages
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  fetchTv: async () => {
    try {
      // isLoading = true;
      set({ isLoading: true });

      const { data } = await tmdb.get("discover/tv");
      set((state) => ({
        ...state,
        isLoading: false,
        tvs: data.results,
        totalPages: data.total_pages
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  // category movie : upcoming, popular, top_rated, now_playing
  fetchMovieByCategory: async (category, page) => {
    try {
      // isLoading = true;
      set({ isLoading: true });
      const categoris = ["popular", "upcoming", "top_rated", "now_playing"];
      if (categoris.includes(category)) {
        const { data } = await tmdb.get(`movie/${category}`, {
          params: {
            page: page
          }
        });
        set((state) => ({
          ...state,
          isLoading: false,
          movies: data.results,
          totalPages: data.total_pages
        }));
      }
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },
  // category movie : upcoming, popular, top_rated, now_playing
  fetchTvByCategory: async (category, page) => {
    try {
      // isLoading = true;
      set({ isLoading: true });
      const categoris = ["popular", "airing_today", "on_the_air", "top_rated"];
      if (categoris.includes(category)) {
        const { data } = await tmdb.get(`tv/${category}`, {
          params: {
            page: page
          }
        });
        set((state) => ({
          ...state,
          isLoading: false,
          tvs: data.results,
          totalPages: data.total_pages
        }));
      }
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  // detail movie
  detailMovie: async (id) => {
    try {
      // isLoading = true;
      set({ isLoading: true });

      const { data } = await tmdb.get(`movie/${id}`);
      set((state) => ({
        ...state,
        isLoading: false,
        movie: data,
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  // detail movie
  fetchVideo: async (media,id) => {
    try {
      // isLoading = true;
      set({ isLoading: true });

      const { data } = await tmdb.get(`${media}/${id}/videos`);
      set((state) => ({
        ...state,
        isLoading: false,
        videos: data.results,
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  // detail tv
  detailTv: async (id) => {
    try {
      // isLoading = true;
      set({ isLoading: true });

      const { data } = await tmdb.get(`tv/${id}`);
      set((state) => ({
        ...state,
        isLoading: false,
        tv: data,
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  searchMovie: async (key) => {
    try {
      const { data } = await tmdb.get(`search/multi`, {
        params: {
          query: key
        }
      });
      set((state) => ({
        ...state,
        searchMovies: data.results,
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  trendingMovie: async (key) => {
    try {
      // isLoading = true;
      // set({ isLoading: true });

      const { data } = await tmdb.get("trending/movie/day");
      set((state) => ({
        ...state,
        trendingMovies: data.results,
      }));
    } catch (err) {
      set({
        isLoading: false,
        error: err,
      });
    }
  },

  resetSearchMovies: () => {
    set((state) => ({
      ...state,
      searchMovies: []
    }));
  }

});

// hooks
const useMovieStore = create(sliceMovie);

// selector
export const selectMovies = (state) => state.movies;
export const selectTvs = (state) => state.tvs;
export const selectedMovie = (state) => state.movie;
export const selectedTv = (state) => state.tv;
export const selectDetailMovie = (state) => state.detailMovie;
export const selectDetailTv = (state) => state.detailTv;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectFetchMovies = (state) => state.fetchMovie;
export const selectFetchTvs = (state) => state.fetchTv;
export const selectFetchMoviesByCategory = (state) => state.fetchMovieByCategory;
export const selectFetchTvsByCategory = (state) => state.fetchTvByCategory;
export const selectTotalPages = (state) => state.totalPages;
export const selectSearchMovies = (state) => state.searchMovie;
export const selectSearchMovie = (state) => state.searchMovies;
export const selectResetSearchedMovies = (state) => state.resetSearchMovies;
export const selectTrendingMovies = (state) => state.trendingMovie;
export const selectedTrendingMovies = (state) => state.trendingMovies;
export const selectFetchVideos = (state) => state.fetchVideo;
export const selectVideos = (state) => state.videos;

// export
export default useMovieStore;
