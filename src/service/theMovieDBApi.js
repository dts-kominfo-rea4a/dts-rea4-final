import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const theMovieDBApi = createApi({
  reducerPath: "theMovieDBApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers, { getState }) => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2UwYmI4Y2FhNWU3MDU2YWU4ZDE0NTlmOGFiMzc3ZSIsInN1YiI6IjYzNTYzZGQwMzg1MjAyMDA4MmM0OTA5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L36i2ALQp7Y5cAPhEyMozAfVnkL0XqonzkEqwt2BET0";

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    popularMovies: builder.query({
      query: (page = 1) => `/movie/popular?language=en-US&page=${page}`,
    }),
    upcomingMovies: builder.query({
      query: (page) => `/movie/upcoming?language=en-US&page=${page}`,
    }),
  }),
});

export const { usePopularMoviesQuery, useUpcomingMoviesQuery } = theMovieDBApi;
