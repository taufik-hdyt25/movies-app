import {useQuery} from "@tanstack/react-query";
import {getDetailMovie} from "./detail.api";

export const actionDetailMovie = (id: number) =>
  useQuery<IDetialMovie>({
    queryKey: ["detail"],
    queryFn: () => getDetailMovie(id),
  });
