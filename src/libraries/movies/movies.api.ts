import {API} from "../axios";

export const getMovies = async (page: number) => {
  const response = await API.get(`/3/movie/top_rated?page=${page}`);
  return response.data;
};
