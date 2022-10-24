import axios from "axios";

const nytInstance = axios.create({
    baseURL: "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json",
    params: {
      api_key: "eyUrYAGdhs5BmTAUsG76SLmXrr2vMY9E",
    },
  });
  

  export default nytInstance;