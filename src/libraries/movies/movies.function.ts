import {useQuery} from "@tanstack/react-query";
import {getMovies} from "./movies.api";
import {IResponseMovies} from "./movies.types";

export const actionMovies = (page: number) =>
  useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies(page),
  });
