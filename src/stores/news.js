import axios from "axios";
import create from "zustand";

// slice
const sliceNews = (set) => ({
  news: [],

  isLoading: false,
  fetchNews: async () => {
    try {
      set({ isLoading: true });
      const { data } = await axios.get(
        "https://api.thenewsapi.com/v1/news/all?api_token=VzU9wSzXT7PTKsEHTM2iSW36TZPP09mF1QpdyDSz"
      );
      set({ isLoading: false, news: data.data });
    } catch (err) {
      console.log(err.message);
      console.log(err.data);
    }
  },
  fetchSingleNews: async (id) => {
    try {
      set({ isLoading: true });
      const pos = await axios.get(
        `https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=VzU9wSzXT7PTKsEHTM2iSW36TZPP09mF1QpdyDSz`
      );
      set({ isLoading: false, news: pos.data });
    } catch (err) {
      console.log(err);
    }
  },
});

// hooks
const useNewsStore = create(sliceNews);

// selector
export const selectNews = (state) => state.news;
export const selectFetchNews = (state) => state.fetchNews;
export const selectLoading = (state) => state.isLoading;
export const selectSingleNews = (state) => state.fetchSingleNews;

// export
export default useNewsStore;
