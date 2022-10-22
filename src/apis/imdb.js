const api_key = '49c27d43354e3e8e12df0edddbc0db24';
const api_url = 'https://api.themoviedb.org/3';

const requests = {
  reqNowPlaying: `${api_url}/movie/now_playing?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
  reqPopularMovies: `${api_url}/movie/popular?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
  reqUpComing: `${api_url}/movie/upcoming?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
  reqTopRated: `${api_url}/movie/top_rated?api_key=${api_key}`, // Get a list of the current popular movies on TMDB. This list updates daily.
}

export default requests;