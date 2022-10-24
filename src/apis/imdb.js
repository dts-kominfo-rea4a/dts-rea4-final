const api_key = process.env.REACT_APP_TMDB_API_KEY;
const api_url = process.env.REACT_APP_TMDB_API_URL;

const requests = {
  reqNowPlaying: `${api_url}/movie/now_playing?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
  reqPopularMovies: `${api_url}/movie/popular?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
  reqUpComing: `${api_url}/movie/upcoming?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
  reqTopRated: `${api_url}/movie/top_rated?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
}

export default requests;