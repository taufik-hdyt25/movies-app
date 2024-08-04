import {API} from "../axios";

export const getSearchMovie = async (query: string) => {
  const response = await API.get(`/3/search/movie?query=${query}`);
  return response.data;
};
