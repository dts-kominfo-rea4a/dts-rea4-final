import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = "df8dc8ae97042b54bd888d43e8ac29eb";

export const tmdbAPI = createApi({
    reducerPath: "tmdbAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3"
    }),

    endpoints: (builder) => ({
        getPopular: builder.query({
            query: () => "/movie/popular?api_key=" + token
        }),
        getTopRated: builder.query({
            query: () => "/movie/top_rated?api_key=" + token
        }),
        getTrending: builder.query({
            query: () => "/trending/all/week?api_key=" + token
        }),
        getNowPlaying: builder.query({
            query: () => "/movie/now_playing?api_key=" + token
        }),
        getLatest: builder.query({
            query: () => "/movie/latest?api_key=" + token
        }),
        getUpcoming: builder.query({
            query: () => "/movie/upcoming?api_key=" + token
        })
    })
})

export const {
    useGetPopularQuery,
    useGetTopRatedQuery,
    useGetTrendingQuery,
    useGetNowPlayingQuery,
    useGetLatestQuery,
    useGetUpcomingQuery
} = tmdbAPI;