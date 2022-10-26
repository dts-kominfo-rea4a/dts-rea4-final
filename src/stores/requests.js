const API_KEY = "7dbfac369233440f20116ee753b1d920";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests;