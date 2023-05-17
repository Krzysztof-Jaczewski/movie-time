export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video?: boolean;
    original_name: string;
    vote_average?: number;
    vote_count?: number;
}

export interface SearchMoviesResponse {
    page: number;
    totalPages: number;
    results: MovieType[];
    totalResults: number;
}
