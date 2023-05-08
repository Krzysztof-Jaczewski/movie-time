import { publicEnvs } from 'configs/envs';

const genres = [
    { id: 28, title: 'Action' },
    { id: 35, title: 'Comedy' },
    { id: 27, title: 'Horror' },
    { id: 10749, title: 'Romance' },
    { id: 9648, title: 'Mystery' },
    { id: 878, title: 'Sci-Fi' },
    { id: 16, title: 'Animation' },
];

type GenreObjectType = {
    title: string;
    url: string;
};
interface FetchDataType {
    [x: string]: GenreObjectType;
}

const genresObjects: FetchDataType = genres.reduce(
    (prev, { id, title }) =>
        Object.assign({
            ...prev,
            [`fetch${title}`]: {
                title,
                url: `/discover/movie?api_key=${publicEnvs.API_KEY}&with_genres=${id}`,
            },
        }),
    {}
);

export const fetchCategoriesData: FetchDataType = {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${publicEnvs.API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'TopRated',
        url: `/movie/top_rated?api_key=${publicEnvs.API_KEY}&language=en-US`,
    },
    ...genresObjects,
};

export const contentData = Object.entries(fetchCategoriesData);
