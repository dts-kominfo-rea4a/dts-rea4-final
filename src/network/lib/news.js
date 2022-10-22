import API from "../apiClient";

export async function getNews() {
  return await API.get(
    "/v1/news?access_key=ac5e010f7a2568c3720833d92438b754&languages=en"
  ).then((res) => {
    return res.data.data;
  });
}
