import axios from "axios";
import create from "zustand";

const apiKey = "38ada4d2f72b385e799e02a44fd10d01";
const baseUrl = "https://api.themoviedb.org/3/";
// slice
const sliceTmdb = (set) => ({

    // state * action
    tmdbid : [],
    isLoading : false,
    error : null,

    fetchData: async (parameter,extra) => {
        try {
            set({ isLoading:true })
            // const {data} = await axios.get(baseUrl + 'movie/upcoming?api_key=' + apiKey + '&languange=en-US&page=1');
            const {data} = await axios.get(baseUrl + parameter + '?api_key=' + apiKey + extra );
            console.log('mau set');
            set((state) => ({
                ...state,
                isLoading:false, 
                tmdbid: data
            }));
            console.log(data);
            console.log('sudah set');
        } catch (err) {
            set({
                isLoading: false,
                error: err,
            })
        }
    }
})

// hooks
const useTmdbIdStore = create(sliceTmdb);

export const selectTmbdb = (state) => state.tmdbid;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectFetchData = (state) => state.fetchData;


// export
export default useTmdbIdStore;