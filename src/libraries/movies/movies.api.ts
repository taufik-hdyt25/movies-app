import {API} from "../axios";
import {IResponseMovies} from "./movies.types";

export const getMovies = async (page: number) => {
  const response = await API.get(`/3/movie/top_rated?page=${page}`);
  return response.data;
};
