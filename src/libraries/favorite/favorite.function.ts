import {useMutation, useQuery} from "@tanstack/react-query";
import {addFavoriteMovie, getFavoriteMovie} from "./favorite.api";

export const actionPostFavoritelMovie = (account_id?: number) =>
  useMutation({
    mutationFn: (payload: IBodyFavorite) =>
      addFavoriteMovie(account_id, payload),
  });

export const actionGetFavorite = (id: number) =>
  useQuery({
    queryKey: ["favorite"],
    queryFn: () => getFavoriteMovie(id),
  });
