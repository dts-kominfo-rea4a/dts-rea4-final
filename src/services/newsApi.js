import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "ca06c463cf3e4d868fcf559761a0ec6f";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: () => `top-headlines?country=id&category=sports&apiKey=${apiKey}`,
    }),
    getNewsBySearch: builder.query({
      query: (textSearch) =>
        `everything?q=${encodeURI(textSearch)}&apiKey=${apiKey}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useGetNewsBySearchQuery } = newsApi;
