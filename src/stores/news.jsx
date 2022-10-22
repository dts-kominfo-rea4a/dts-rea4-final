import axios from "axios";
import create from "zustand";

const sliceNews = (set) => ({
  news: [],
  topNews: { fields: {} },
  isLoadingNews: false,
  isLoadingTopNews: false,
  errorNews: null,
  errorTopNews: null,

  fetchNews: async () => {
    try {
      set({ isLoadingNews: true });

      const { data } = await axios.get(
        "https://content.guardianapis.com/search?api-key=16849653-4137-41e1-af3b-924c3f125119&show-fields=body,thumbnail,publication"
      );
      set((state) => ({
        ...state,
        isLoadingNews: false,
        news: data.response.results,
      }));
    } catch (err) {
      set({
        isLoadingNews: false,
        errorNews: err,
      });
    }
  },

  fetchTopNews: async () => {
    try {
      set({ isLoadingTopNews: true });

      const { data } = await axios.get(
        "https://content.guardianapis.com/search?api-key=16849653-4137-41e1-af3b-924c3f125119&&star-rating=5&show-fields=body,thumbnail,publication"
      );
      set((state) => ({
        ...state,
        isLoadingTopNews: false,
        topNews: data.response.results[0],
      }));
    } catch (err) {
      set({
        isLoadingTopNews: false,
        errorTopNews: err,
      });
    }
  },
});

// hooks
const useNewsStore = create(sliceNews);

// selector
export const selectNews = (state) => state.news;
export const selectTopNews = (state) => state.topNews;
export const selectIsLoadingNews = (state) => state.isLoadingNews;
export const selectErrorNews = (state) => state.errorNews;
export const selectIsLoadingTopNews = (state) => state.isLoadingTopNews;
export const selectErrorTopNews = (state) => state.errorTopNews;
export const selectFetchNews = (state) => state.fetchNews;
export const selectFetchTopNews = (state) => state.fetchTopNews;

// export
export default useNewsStore;
