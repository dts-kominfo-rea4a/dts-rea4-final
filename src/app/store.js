import { configureStore } from "@reduxjs/toolkit";
import { theMovieDBApi } from "../service/theMovieDBApi";
import sliceCart from "../features/cart/sliceCart";

export const storeRTK = configureStore({
  reducer: {
    [theMovieDBApi.reducerPath]: theMovieDBApi.reducer,
    cartSlice: sliceCart,
  },
});
