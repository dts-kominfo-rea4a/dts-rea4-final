import axios from "axios";

const newsApiInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    params: {
        country: "id",
        pageSize: 9,
        apiKey: "e3618b5db98c41a78e54aeb4e310b8d7"
    }
})

export default newsApiInstance