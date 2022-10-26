import axios from "axios";

export const DEFAULT_PARAMS = {
    sortBy:"popularity",
}

const newsApiInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "X-Api-Key" : process.env.REACT_APP_NEWS_API_KEY
    },
})

export default newsApiInstance