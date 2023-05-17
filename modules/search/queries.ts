import { useQuery } from '@tanstack/react-query';
import { getSearchMovies } from 'modules/search/services';
import { SearchMoviesResponse } from 'ts/types';

export const useSearchMovies = (query: string) =>
    useQuery<SearchMoviesResponse>(['searchMovies', query], () =>
        getSearchMovies(query)
    );
