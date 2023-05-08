import axios from 'axios';
import MovieCard from 'components/molecules/MovieCard';
import { publicEnvs } from 'configs/envs';
import { fetchCategoriesData } from 'configs/fetchData';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { MovieType } from 'ts/types';

interface Props {
    moviesArray?: MovieType[];
}

const MoviesList: FC<Props> = ({ moviesArray }) => {
    console.log('TCL: moviesArray', moviesArray);
    return (
        <div className=' flex flex-wrap '>
            {moviesArray?.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
            ))}
        </div>
    );
};

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
