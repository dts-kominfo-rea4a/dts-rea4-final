import axios from "axios";
import create from "zustand";
import produce from "immer";

const api_key = '49c27d43354e3e8e12df0edddbc0db24';
const headers = { params : { api_key : api_key } };
const api_url = 'https://api.themoviedb.org/3';

// const requestOthers = {
//   requestTop250Movies: `${api_url}/Top250Movies/${api_key}`, // Get Top 250 Movies.
//   requestTop250TVs: `${api_url}/MostPopularMovies/${api_key}`, // Get Top 250 Series TVs.
//   requestMostPopularMovies: `${api_url}/MostPopularMovies/${api_key}`, // Get Top 100 Most Polular Movies.
//   requestMostPopularTVs:    `${api_url}/MostPopularTVs/{api_key}`, // Get Top 100 Most Polular Series TVs.
//   requestInTheaters: `${api_url}/InTheaters/${api_key}`, // Get In Theaters Movies.
//   requestComingSoon: `${api_url}/ComingSoon/${api_key}`, // Get Coming Soon Movies. 
//   requestBoxOffice: `${api_url}/BoxOffice/${api_key}`, // Get Weekend Box Office. 
//   requestBoxOfficeAllTime: `${api_url}/BoxOfficeAllTime/${api_key}`, // Get Box Office in all times.
//   requestName: `${api_url}/Name/${api_key}`, //Get information of people (actor, actress, director, writers, ...).
//   requestNameWards: `${api_url}/NameWards/${api_key}`, // Get Awards of people.
//   requestCompany: `${api_url}/Company/${api_key}`, // Get Awards of people.
//   requestYoutubeTrailer: `${api_url}/YoutubeTrailer/${api_key}`, // Get Awards of people.
// }

const sliceMovies = (set) => ({
  movies : [],

  fetchPopularMovies : async () => {
    try {
      const { data } = await axios.get(`${api_url}/movie/popular`, headers);
      set((state) => ({
        ...state,
        movies : data.results,
      }));
    } catch (error) {
      console.log(error);
    }
  },


});

const useMovies = create(sliceMovies);

export const selectMovies = (state) => state.movies;
export const selectFetchMostPopularMovies = (state) => state.fetchPopularMovies;

export default useMovies;
// export default requestOthers;