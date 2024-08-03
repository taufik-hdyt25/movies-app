import {API} from "../axios";

export const getNowPlaying = async () => {
  const response = await API.get("/3/movie/now_playing");
  return response.data;
};

export const getMoviePopuler = async () => {
  const response = await API.get("/3/movie/popular");
  return response.data;
};
