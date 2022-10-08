const API_KEY = process.env.API_KEY;

const genres = [
  { id: 28, title: 'Action' },
  { id: 35, title: 'Comedy' },
  { id: 27, title: 'Horror' },
  { id: 10749, title: 'Romance' },
  { id: 9648, title: 'Mystery' },
  { id: 878, title: 'Sci-Fi' },
  { id: 16, title: 'Animation' },
];

const genresObjects = genres.reduce(
  (o, { id, title }) =>
    Object.assign({
      ...o,
      [`fetch${title}`]: {
        title,
        url: `/discover/movie?api_key=${API_KEY}&with_genres=${id}`,
      },
    }),
  {},
);

export const fetchData = {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  ...genresObjects,
};

console.log(fetchData);
