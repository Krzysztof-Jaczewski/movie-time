import axios from 'axios';
import { publicEnvs } from 'configs/envs';
import { SearchMoviesResponse } from 'ts/types';

export const getSearchMovies = async (
    query: string
): Promise<SearchMoviesResponse> => {
    const res = await axios.get(
        `${publicEnvs.BASE_URL}search/movie?api_key=${publicEnvs.API_KEY}&language=pl&query=${query}`
    );
    return res.data;
};
