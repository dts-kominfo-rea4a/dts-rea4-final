import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "xyqv58ctrgAqrpbRbRz9eC36yIByhjw3UiSkHuzz";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://api.thenewsapi.com/v1/news/",
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: () => `all?language=id&api_token=${apiKey}`,
    }),
    getNewsBySearch: builder.query({
      query: (textSearch) =>
        `all?search=${encodeURI(textSearch)}&api_token=${apiKey}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useGetNewsBySearchQuery } = newsApi;
