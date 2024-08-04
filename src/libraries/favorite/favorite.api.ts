import {API} from "../axios";

export const getFavoriteMovie = async (account_id: number) => {
  const response = await API.get(`/3/account/${account_id}/favorite/movies`);
  return response.data;
};

export const addFavoriteMovie = async (
  account_id?: number,
  body?: IBodyFavorite
) => {
  const response = await API.post(`/3/account/${account_id}/favorite`, body);
  return response.data;
};
