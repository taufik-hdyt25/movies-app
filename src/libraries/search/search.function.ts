import {useQuery} from "@tanstack/react-query";
import {getSearchMovie} from "./search.api";
import useDebounce from "@src/hooks/useDebounce";

export const actionSearchMovie = (query: string) => {
  return useQuery({
    queryKey: ["search"],
    queryFn: () => getSearchMovie(query),
    enabled: !!query,
  });
};
