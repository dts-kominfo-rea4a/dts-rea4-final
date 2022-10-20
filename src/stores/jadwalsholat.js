import axios from "axios";
import create from "zustand";

//slice
const sliceJadwalSholat = (set) => ({
  // state
  jadwalSholat: [],
  listKota: [],
  isLoading: false,
  error: null,
  // action
  fetchJadwalSholat: async (kota) => {
    try {
      // dalam zustand jika hanya 1 level dapat langung di set
      // set((state) => ({...state, isLoading: false }));
      set({ isLoading: true });
      const year = new Date().getFullYear();
      const month = String(new Date().getMonth() + 1).padStart(2, "0");
      const data = await axios.get(
        `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${kota}/${year}/${month}.json`
      );

      // kalo ini ada beberapa level didalam data
      set((state) => ({ ...state, jadwalSholat: data.data, isLoading: false }));
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },
  fetchListKota: async () => {
    try {
      // dalam zustand jika hanya 1 level dapat langung di set
      // set((state) => ({...state, isLoading: false }));
      set({ isLoading: true });
      const options = {
        headers: {
          "X-Auth-Email": "react@tunnel.id",
          "X-Auth-Key": "0ee4c1a3cdc6b900fc396fcf15a9db26d2a2f",
          "Content-Type": "application/json",
        },
      };
      const data = await axios.get("https://paybizapi.paydia.id");
      console.log(data);
      // kalo ini ada beberapa level didalam data
      set((state) => ({ ...state, listKota: data.data, isLoading: false }));
    } catch (err) {
      set({ error: err, isLoading: false });
    }
  },
});
// hooks
const useJadwalSholatStore = create(sliceJadwalSholat);
// selector
export const selectJadwalSholat = (state) => state.jadwalSholat;
export const selectListKota = (state) => state.listKota;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectFetchJadwalSholat = (state) => state.fetchJadwalSholat;
export const selectFetchListKota = (state) => state.fetchListKota;
//export
export default useJadwalSholatStore;
