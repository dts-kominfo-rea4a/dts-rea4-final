import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import newsApiInstance, {DEFAULT_PARAMS} from "../Apis/newsApiInstance";
import jakPostApiInstance from "../Apis/JakPostApiInstance";
import axios from "axios";

const initialStateNews = {
    loading: false,
    error: null,
    news: [],
    topNews: [],
    detailNews: [],
    searchNews: []
}

export const getNews = createAsyncThunk("getNews", async ({category}) => {
    const responseNewsApi = await jakPostApiInstance.get(`/category/${category}`)

    return responseNewsApi.data.posts
})

export const getTopNews = createAsyncThunk("getTopNews", async () => {
    const responseNewsApi = await jakPostApiInstance.get("/category/most-viewed")
    return responseNewsApi.data.posts
})

export const getNewsDetail = createAsyncThunk("getNewsDetail", async ({link}) => {
    const responseNewsApi = await axios.get(link)
    return responseNewsApi.data.detail_post
})

export const getSearchNews = createAsyncThunk("searchNews", async ({searchValue}) => {
    const responseNewsApi = await jakPostApiInstance.get(`/search/${searchValue}/relevance/1`)
    return responseNewsApi.data.data;
})

const newsSlice = createSlice({
    name: "news",
    initialState: initialStateNews,
    extraReducers: {
        //get everything news
        [getNews.pending]: (state, action) => {
            state.loading = true
        },
        [getNews.fulfilled]: (state, action) => {
            state.loading = false
            state.news = action.payload
        },
        [getNews.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //get top headlines news
        [getTopNews.pending]: (state, action) => {
            state.loading = true
        },
        [getTopNews.fulfilled]: (state, action) => {
            state.loading = false
            state.topNews = action.payload
        },
        [getTopNews.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //get detail news
        [getNewsDetail.pending]: (state, action) => {
            state.loading = true
        },
        [getNewsDetail.fulfilled]: (state, action) => {
            state.loading = false
            state.detailNews = action.payload
        },
        [getNewsDetail.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //get search news
        [getSearchNews.pending]: (state, action) => {
            state.loading = true
        },
        [getSearchNews.fulfilled]: (state, action) => {
            state.loading = false
            state.searchNews = action.payload
        },
        [getSearchNews.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default newsSlice.reducer