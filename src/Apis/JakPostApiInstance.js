import axios from "axios";

const jakPostApiInstance = axios.create({
    baseURL: "https://jakpost.vercel.app/api",
})

export default jakPostApiInstance