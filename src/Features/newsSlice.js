import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import inshortNewsApiInstance from "../Apis/InshortNewsApiInstance";

const initialStateNews = {
    loading: false,
    error: null,
    news: []
}

export const getNews = createAsyncThunk("getNews", async ({category}) => {
    const responseNewsApi = await inshortNewsApiInstance.get("/news", {
        params: {
            category: category
        }
    })

    return responseNewsApi.data.data
})

const newsSlice = createSlice({
    name: "news",
    initialState: initialStateNews,
    extraReducers: {
        [getNews.pending]: (state, action) => {
            state.loading = true
        },
        [getNews.fulfilled]: (state, action) => {
            state.loading = false
            state.news = [action.payload]
        },
        [getNews.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default newsSlice.reducer