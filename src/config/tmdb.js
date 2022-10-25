import axios from 'axios';

const tmdbConfig = {
    apiKey : "38ada4d2f72b385e799e02a44fd10d01",
    baseUrl : "https://api.themoviedb.org/3/",
    sessionId : "5ecdc01d8a020be13de748b7b3aeae4f1d7a009a"
};

const tmdb = axios.create({baseURL: tmdbConfig.baseUrl, params: {api_key: tmdbConfig.apiKey}});
export {tmdbConfig};
export default tmdb;
