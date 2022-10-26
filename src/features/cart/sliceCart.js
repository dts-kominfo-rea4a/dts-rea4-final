import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateForCartItem = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialStateForCartItem,
  reducers: {
    addCartItem(state, action) {
      state.counter += 1;
      state.cart.push(action.payload);
    },
    removeCartItem(state, action) {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export const selectCart = (state) => state.cartSlice.cart;

export default cartSlice.reducer;
