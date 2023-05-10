import axios from 'axios';
import MovieCard from 'components/MovieCard/MovieCard';
import { publicEnvs } from 'configs/envs';
import { fetchCategoriesData } from 'configs/fetchData';
import type { GetServerSideProps } from 'next';
import { FC } from 'react';
import { MovieType } from 'ts/types';

interface Props {
    moviesArray?: MovieType[];
}

const MoviesList: FC<Props> = ({ moviesArray }) => (
    <div className='flex flex-wrap justify-center my-7 w-fit gap-3 md:gap-5 mx-auto '>
        {moviesArray?.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
        ))}
    </div>
);

export default MoviesList;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { genre } = context.query;

    try {
        const request = await axios.get(
            `${publicEnvs.BASE_URL}${
                fetchCategoriesData[genre as string]?.url ??
                fetchCategoriesData.fetchTrending.url
            }`
        );

        return {
            props: request.data,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
