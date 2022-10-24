const API_KEY = "4f3a26c6ce31abe373b532666fed45e2";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`,
  fetchMetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  getGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};

export default requests;
