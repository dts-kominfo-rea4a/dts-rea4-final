import axios from "axios";

const InshortNewsApiInstance = axios.create({
    baseURL: "https://inshorts.deta.dev",
})

export default InshortNewsApiInstance