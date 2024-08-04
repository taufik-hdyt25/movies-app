export interface IResponseMovies {
  page: number | undefined;
  results: INowPlaying[];
  total_pages: number;
  total_results: number;
}
