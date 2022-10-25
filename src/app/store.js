import { configureStore } from "@reduxjs/toolkit";
import { theMovieDBApi } from "../service/theMovieDBApi";

export const storeRTK = configureStore({
  reducer: {
    [theMovieDBApi.reducerPath]: theMovieDBApi.reducer,
  },
});
