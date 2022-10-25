import create from "zustand";
import axios from "axios";
//slice
const sliceNews = (set) => ({
  //state awal
  //news= untuk menampung fetching data
  news: [],
  //
  fetchNewsNyTimes: async () => {
    try {
      const { data } = await axios.get("https://api.thenewsapi.com/v1/news/all?api_token=mTP770GIPDGoRx3m40L8GmUfDNJV61yBfluqzN12");
      console.log(data, "ini news Api");
      set({ news: data.data });
    } catch (err) {
      console.log(err);
    }
  },
  fetchSingleNews: async (id) => {
    try {
      const data = await axios.get(`https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=mTP770GIPDGoRx3m40L8GmUfDNJV61yBfluqzN12`);
      set({ news: data.data });
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  },
});

//"Hooks"
const useNewsStore = create(sliceNews);

//Selector/ Actions

export const selectFetchNews = (state) => state.fetchNewsNyTimes;
export const selectNewsApi = (state) => state.news;
export const selectDetailNews = (state) => state.fetchSingleNews;
//export Hooks
export default useNewsStore;
