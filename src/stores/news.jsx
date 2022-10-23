import axios from "axios";
import create from "zustand";

const sliceNews = (set, get) => ({
  news: [],
  topNews: { fields: {} },
  detailNews: { fields: {} },
  searchNews: { results: [] },
  isLoadingNews: false,
  isLoadingTopNews: false,
  isLoadingDetailNews: false,
  isLoadingSearchNews: false,
  errorNews: null,
  errorTopNews: null,
  errorDetailNews: null,
  errorSearchNews: null,
  params: {
    "api-key": "16849653-4137-41e1-af3b-924c3f125119",
    "show-fields": "body,thumbnail,publication",
  },

  fetchNews: async () => {
    try {
      set({ isLoadingNews: true });
      const params = get().params;

      const { data } = await axios.get(
        "https://content.guardianapis.com/search",
        { params }
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
      let params = Object.assign({}, get().params);
      params["star-rating"] = 5;

      const { data } = await axios.get(
        "https://content.guardianapis.com/search",
        { params }
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

  fetchDetailNews: async (id) => {
    try {
      set({ isLoadingDetailNews: true });
      const params = get().params;

      const { data } = await axios.get(
        `https://content.guardianapis.com/${id}`,
        { params }
      );
      set((state) => ({
        ...state,
        isLoadingDetailNews: false,
        detailNews: data.response.content,
      }));
    } catch (err) {
      set({
        isLoadingDetailNews: false,
        errorDetailNews: err,
      });
    }
  },

  fetchSearchNews: async (search, page) => {
    try {
      set({ isLoadingSearchNews: true });
      let params = Object.assign({}, get().params);
      params["q"] = encodeURI(search);
      params["page"] = page;

      const { data } = await axios.get(
        `https://content.guardianapis.com/search`,
        { params }
      );
      set((state) => ({
        ...state,
        isLoadingSearchNews: false,
        searchNews: data.response,
      }));
    } catch (err) {
      set({
        isLoadingSearchNews: false,
        errorSearchNews: err,
      });
    }
  },
});

// hooks
const useNewsStore = create(sliceNews);

// selector
export const selectNews = (state) => state.news;
export const selectTopNews = (state) => state.topNews;
export const selectDetailNews = (state) => state.detailNews;
export const selectSearchNews = (state) => state.searchNews;

export const selectIsLoadingNews = (state) => state.isLoadingNews;
export const selectIsLoadingTopNews = (state) => state.isLoadingTopNews;
export const selectIsLoadingDetailNews = (state) => state.isLoadingDetailNews;
export const selectIsLoadingSearchNews = (state) => state.isLoadingSearchNews;

export const selectErrorNews = (state) => state.errorNews;
export const selectErrorTopNews = (state) => state.errorTopNews;
export const selectErrorDetailNews = (state) => state.errorDetailNews;
export const selectErrorSearchNews = (state) => state.errorSearchNews;

export const selectFetchNews = (state) => state.fetchNews;
export const selectFetchTopNews = (state) => state.fetchTopNews;
export const selectFetchDetailNews = (state) => state.fetchDetailNews;
export const selectFetchSearchNews = (state) => state.fetchSearchNews;

// export
export default useNewsStore;
