import {useQuery} from "@tanstack/react-query";
import {getMovies} from "./movies.api";

export const actionMovies = (page: number) =>
  useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(page),
  });
