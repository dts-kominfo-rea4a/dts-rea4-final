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
      const { data } = await axios.get("https://content.guardianapis.com/search?api-key=test");
      console.log(data, "ini news Api");
      set({ news: data.response });
    } catch (err) {
      console.log(err);
    }
  },
  // get single data
  fetchSingleNews: async (id) => {
    try {
      const data = await axios.get(`https://content.guardianapis.com/${id}?api-key=test`);
      set({ news: data.response });
      console.log(data.response);
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
