import create from "zustand";
import axios from "axios";

const sliceMovie = (set) => ({
  // kali ini statenya berbentuk sebuah object, dan disupport oleh zustand yah !
  // (non primitive value)
  movie: {},
  movieTrendingDay: [],
  movieTrendingWeek: [],
  tvTrendingWeek: [],
  movieById: {},
  keywordMovie: "",
  keywordTv: "",

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
        set({ movieTrendingDay: data.results.slice(0, 15) });
      } else if (type === "week") {
        set({ movieTrendingWeek: data.results.slice(0, 15) });
      }
    } else if (categories === "tv") {
      set({ tvTrendingWeek: data.results.slice(0, 15) });
    }
  },

  fetchMovieById: async (id, type) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=28036dc96a89f050276c45424d61cd0f`
    );

    set({ movieById: data });
  },

  setKeywordMovie: (value) => {
    set({ keywordMovie: value });
  },

  setKeywordTv: (value) => {
    set({ keywordTv: value });
  },

  filterMovie: (str, listMovie) => {
    if (str !== "") {
      let searchVal = str
        .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        .toUpperCase();
      let regex = new RegExp(searchVal, "g");
      let filterResult = listMovie.filter((movie) => {
        return movie.original_title.toUpperCase().match(regex);
      });

      set({ movieTrendingWeek: filterResult });
    }
  },

  filterTv: (str, listMovie) => {
    if (str !== "") {
      let searchVal = str
        .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        .toUpperCase();
      let regex = new RegExp(searchVal, "g");
      let filterResult = listMovie.filter((movie) => {
        return movie.original_name.toUpperCase().match(regex);
      });

      set({ tvTrendingWeek: filterResult });
    }
  },
});

// Hooks
const useMovieStore = create(sliceMovie);

// Selectors
export const selectMovie = (state) => state.movie;
export const selectMovieById = (state) => state.movieById;
export const selectMovieTrendingDay = (state) => state.movieTrendingDay;
export const selectMovieTrendingWeek = (state) => state.movieTrendingWeek;
export const selectTvTrendingWeek = (state) => state.tvTrendingWeek;
export const selectFetchMovie = (state) => state.fetchMovie;
export const selectFetchMovieTrending = (state) => state.fetchMovieTrending;
export const selectFetchMovieById = (state) => state.fetchMovieById;
export const selectKeywordMovie = (state) => state.keywordMovie;
export const setKeywordMovie = (state) => state.setKeywordMovie;
export const setFilterMovie = (state) => state.filterMovie;
export const selectKeywordTv = (state) => state.keywordTv;
export const setKeywordTv = (state) => state.setKeywordTv;
export const setFilterTv = (state) => state.filterTv;

// export hooks
export default useMovieStore;
