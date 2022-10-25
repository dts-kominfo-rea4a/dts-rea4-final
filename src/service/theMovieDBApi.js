import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const theMovieDBApi = createApi({
  reducerPath: "theMovieDBApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers, { getState }) => {
      const token = "";

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    popularMovies: builder.query({
      query: () => "/movie/popular?language=en-US&page=1",
    }),
    upcomingMovies: builder.query({
      query: (page) => `/movie/upcoming?language=en-US&page=${page}`,
    }),
  }),
});

export const { usePopularMoviesQuery, useUpcomingMoviesQuery } = theMovieDBApi;
