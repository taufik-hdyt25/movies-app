import {useQuery} from "@tanstack/react-query";
import {getMoviePopuler, getNowPlaying} from "./home.api";

export const actionHomeNowPlaying = () =>
  useQuery({
    queryKey: ["nowPlaying"],
    queryFn: () => getNowPlaying(),
  });

export const actionHomePopuler = () =>
  useQuery({
    queryKey: ["moviePopuler"],
    queryFn: () => getMoviePopuler(),
  });
