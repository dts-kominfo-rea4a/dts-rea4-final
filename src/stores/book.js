import axios from "axios";
import create from "zustand";

//slice
const sliceBooks = (set) => ({
  // state
  books: {},
  bookDetail: {},
  isLoading: false,
  error: null,
  // action
  fetchBooks: async (query = "arts", page = 0) => {
    try {
      // dalam zustand jika hanya 1 level dapat langung di set
      // set((state) => ({...state, isLoading: false }));
      const startIndex = page * 5;
      set({ isLoading: true });
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`
      );
      // kalo ini ada beberapa level didalam data
      set((state) => ({ ...state, books: data.data, isLoading: false }));
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },
  fetchBookDetail: async (bookid) => {
    try {
      set({ isLoading: true });
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookid}`
      );
      set((state) => ({
        ...state,
        bookDetail: data.data.volumeInfo,
        isLoading: false,
      }));
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
});
// hooks
const useBooksStore = create(sliceBooks);
// selector
export const selectBooks = (state) => state.books;
export const selectFetchBooks = (state) => state.fetchBooks;
export const selectBookDetail = (state) => state.bookDetail;
export const selectFetchBookDetail = (state) => state.fetchBookDetail;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
//export
export default useBooksStore;
