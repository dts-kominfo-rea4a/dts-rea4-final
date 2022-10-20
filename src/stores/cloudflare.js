import axios from "axios";
import create from "zustand";

const sliceCF = (set) => ({
  listZones: [],
  listDnsZones: [],
  isLoading: false,
  error: null,
  fetchZones: async () => {
    try {
      // dalam zustand jika hanya 1 level dapat langung di set
      // set((state) => ({...state, isLoading: false }));
      const options = {
        headers: {
          "X-Auth-Email": process.env.REACT_APP_CF_EMAIL,
          "X-Auth-Key": process.env.REACT_APP_CF_KEY,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      set({ isLoading: true });
      const data = await axios.get(
        "https://api.cloudflare.com/client/v4/zones?match=all"
      );
      console.log(data);
      // kalo ini ada beberapa level didalam data
      set((state) => ({ ...state, listZones: data.result, isLoading: false }));
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },
});
const useCFStores = create(sliceCF);
// selector
export const selectListZones = (state) => state.listZones;
// export const selectListDNSZones = (state) => state.listDnsZones;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectFetchZones = (state) => state.fetchZones;
// export const selectFetchDNSZones = (state) => state.fetchDNSZones;
//export
export default useCFStores;
