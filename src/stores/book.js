import axios from "axios";
import create from "zustand";

//slice
const sliceBooks = (set) => ({
  // state
  books: {},
  isLoading: false,
  error: null,
  // action
  fetchBooks: async (query = "arts") => {
    try {
      // dalam zustand jika hanya 1 level dapat langung di set
      // set((state) => ({...state, isLoading: false }));
      set({ isLoading: true });
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&key=${process.env.REACT_APP_KEY}`
      );
      // kalo ini ada beberapa level didalam data
      set((state) => ({ ...state, books: data.data, isLoading: false }));
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },
});
// hooks
const useBooksStore = create(sliceBooks);
// selector
export const selectBooks = (state) => state.books;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectFetchBooks = (state) => state.fetchBooks;
//export
export default useBooksStore;
