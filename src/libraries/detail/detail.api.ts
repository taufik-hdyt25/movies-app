import {API} from "../axios";

export const getDetailMovie = async (id: number) => {
  const response = await API.get(`/3/movie/${id}`);
  return response.data;
};
