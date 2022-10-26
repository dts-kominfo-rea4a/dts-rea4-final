import quran from "../apis/quran";
import create from "zustand";
// import produce from "immer";

const sliceQuran = (set) => ({
  //state
  listSurat: [],
  suratSelected: {},
  suratInfo: {},
  suratListAyat: [],
  suratPagination: {},
  ayatTersimpan: [],
  isLoadMore: true,
  isLoading: false,
  errors: null,

  //action
  fetchListSurat: async () => {
    try {
      set({ isLoading: true });
      const response = await quran.get("/chapters");
      set((state) => ({
        ...state,
        listSurat: response.data.chapters,
        isLoading: false,
        errors: null,
      }));
    } catch (error) {
      set({ errors: error, isLoading: false });
    }
  },
  fetchSuratSelected: async (surat_id) => {
    try {
      set({ isLoading: true });
      const response = await quran.get(`/chapters/${surat_id}`);
      set((state) => ({
        ...state,
        isLoading: false,
        suratSelected: response.data.chapter,
        errors: null,
      }));
    } catch (error) {
      set({ errors: error, isLoading: false });
    }
  },
  fetchSuratInfo: async (surat_id) => {
    try {
      set({ isLoading: true });
      const response = await quran.get(`/chapters/${surat_id}/info`);
      set((state) => ({
        ...state,
        isLoading: false,
        suratInfo: response.data.chapter_info,
        errors: null,
      }));
    } catch (error) {
      set({ errors: error, isLoading: false, suratInfo: {} });
    }
  },
  fetchSurat: async (surat_id, page = 1) => {
    try {
      set({ isLoading: true });
      const response = await quran.get(
        `/chapters/${surat_id}/verses?page=${page}&translations=33&text_type=image`
      );

      const loadMore = response.data.pagination.next_page !== null;
      if (page === 1) {
        const response_info = await quran.get(`/chapters/${surat_id}`);
        set((state) => ({
          ...state,
          suratSelected: response_info.data.chapter,
          errors: null,
        }));
      }

      set((state) => ({
        ...state,
        isLoading: false,
        suratListAyat:
          page === 1
            ? response.data.verses
            : [...state.suratListAyat, ...response.data.verses],
        suratPagination: response.data.pagination,
        isLoadMore: loadMore,
        errors: null,
      }));
    } catch (error) {
      set({ errors: error, isLoading: false });
    }
  },
  storeAyat: (ayat) => {
    try {
      set({ isLoading: true });
      set((state) => {
        const isSaved =
          state.ayatTersimpan.filter((ayatCheck) => ayatCheck.id === ayat.id)
            .length > 0;

        const newAyat = isSaved
          ? [...state.ayatTersimpan.filter((x) => x.id !== ayat.id)]
          : [...state.ayatTersimpan, ayat];

        localStorage.setItem("quran:tersimpan", JSON.stringify(newAyat));
        return {
          ...state,
          ayatTersimpan: newAyat,
          isLoading: false,
        };
      });
    } catch (error) {
      set({ errors: error, isLoading: false });
    }
  },
  storeAyatLocal: (ayats) => {
    try {
      set((state) => ({ ...state, ayatTersimpan: ayats }));
    } catch (error) {
      set({ errors: error, isLoading: false });
    }
  },
});

const useQuranStore = create(sliceQuran);

export const selectIsLoading = (state) => state.isLoading;
export const selectIsLoadMore = (state) => state.isLoadMore;

export const selectListSurat = (state) => state.listSurat;

export const selectSuratSelected = (state) => state.suratSelected;
export const selectSuratInfo = (state) => state.suratInfo;
export const selectSuratListAyat = (state) => state.suratListAyat;
export const selectSuratPagination = (state) => state.suratPagination;
export const selectAyatTersimpan = (state) => state.ayatTersimpan;

export const selectFetchListSurat = (state) => state.fetchListSurat;
export const selectFetchSuratSelected = (state) => state.fetchSuratSelected;
export const selectFetchSurat = (state) => state.fetchSurat;
export const selectFetchSuratInfo = (state) => state.fetchSuratInfo;
export const selectStoreAyat = (state) => state.storeAyat;
export const selectStoreAyatLocal = (state) => state.storeAyatLocal;

export const selectError = (state) => state.errors;

export default useQuranStore;
