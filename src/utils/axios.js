import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjVjMjA3Y2NhOWNkZTc1OTk2ZGE0MDIwZmFmMzJkNSIsInN1YiI6IjYzNTM3ZTdhYzk5ODI2MDA3YWJiOTU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bhvcVZmz1zDftMt7JQ-9y4kjZ2zjtrn56GO28-MAfLw",
  },
});

export default axiosInstance;
