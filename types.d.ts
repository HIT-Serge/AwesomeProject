// Personal types

// export type StateType = {
//     detailsOn: boolean;
//     showID?: number;
// };
// export type StateContextType = {
//     detailState: StateType;
//     setDetailState: (value: any) => void;
// };

export type FetchResponse = {
    data: ApiResponse | null;
    loading: boolean;
};

export type ApiResponse = {
    results: SerieObject[] | SerieDetailObject[] | SerieEpisodesObject[] | MovieObject[] | MovieDetailObject | TrendingObject | null;
};

/* ********************** MOVIE ********************** */

export type MovieObject = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type: string;
};

export type MovieDetailObject = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type ProductionCompany = {
    id: number;
    logo_path: null;
    name: string;
    origin_country: string;
};

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

export type SpokenLanguage = {
    iso_639_1: string;
    name: string;
};

/* ********************** SERIE ********************** */

export type SerieObject = {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    // media_type: string;
};

export type SerieDetailObject = {
    adult: boolean;
    backdrop_path: string;
    created_by: CreatedBy[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air: null;
    number_of_episodes: number;
    number_of_seasons: number;
    poster_path: string;
    seasons: Season[];
    status: string;
    tagline: string;
    overview: string;
};

export type CreatedBy = {
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    profile_path: string;
};

export type Genre = {
    id: number;
    name: string;
};

export type LastEpisodeToAir = {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: null;
    vote_average: number;
    vote_count: number;
};

/* ********************** SERIE SEASON ********************** */


export type Season = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
};

export type SerieEpisodesObject = {
    air_date: string;
    episodes: Episode[];
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    _id: string;
};

export type Episode = {
    episode_number: number;
    id: number;
    name: string;
    still_path: string;
    overview: string;
    air_date: string;
    runtime: number;
}

/* ********************** CREDITS ********************** */

export type CreditsObject = {
    cast: Cast[];
    crew: Crew[];
    id: number;
};

export type Cast = {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
};

export type Crew = {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
};


/* ********************** TRENDING ********************** */

export type TrendingObject = {
    page: number;
    results: MovieObject[] | SerieObject[] | null;
    total_pages: number;
    total_results: number;
};

export type TrendingResult = {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};