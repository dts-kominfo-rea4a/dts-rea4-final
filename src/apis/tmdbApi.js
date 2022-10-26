import axios from "axios";

const API_KEY = "0019ea82a31cbfdd6349bf5dca6d5934";
const BASE_URL = "https://api.themoviedb.org/3/";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdbApi;
