import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import newsApiInstance, {DEFAULT_PARAMS} from "../Apis/newsApiInstance";

const initialStateNews = {
    loading: false,
    error: null,
    news: [],
}

export const getNews = createAsyncThunk("getNews", async ({category, sort}) => {
    const responseNewsApi = await newsApiInstance.get("/everything", {
        params: {
            ...DEFAULT_PARAMS,
            language: "en",
            q: category,
            sortBy: sort,
            pageSize: 24
        }
    })

    return responseNewsApi.data.articles
})

export const getTopNews = createAsyncThunk("getTopNews", async ({category}) => {
    const responseNewsApi = await newsApiInstance.get("/top-headlines", {
        params: {
            ...DEFAULT_PARAMS,
            category: category,
            pageSize: 10
        }
    })

    return responseNewsApi.data.articles
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
        }
    }
})

export default newsSlice.reducer