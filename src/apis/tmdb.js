import axios from "axios";

const api_key = "2eaea2b2a79fcff84d0f3e9417935619";
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    'api_key' : api_key
  }
});

// Karena nanti akan digunakan di tempat lain
// maka kita harus export
export default tmdb;
