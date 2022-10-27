import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dts-32-backend.azurewebsites.net/api",
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/UserProfileFunction-Get",
    }),
    addMessage: builder.mutation({
      query: (msg) => ({
        url: "/UserProfileFunction-Upsert",
        method: "POST",
        body: msg,
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useAddMessageMutation } = movieApi;
