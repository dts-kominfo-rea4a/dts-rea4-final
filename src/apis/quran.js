import axios from "axios";

const quran = axios.create({
  baseURL: "https://api.quran.com/api/v3",
  params: {
    language: "id",
  },
});

export default quran;
