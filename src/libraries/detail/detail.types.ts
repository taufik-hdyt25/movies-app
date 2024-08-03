interface IDetialMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: number;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductCompany[];
  production_countries: IProductCountri[];
  release_date: string;
  revenue: string;
  runtime: number;
  spoken_languages: ISpokLeanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IGenres {
  id: number;
  name: string;
}

interface IProductCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProductCountri {
  iso_3166_1: string;
  name: string;
}

interface ISpokLeanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
