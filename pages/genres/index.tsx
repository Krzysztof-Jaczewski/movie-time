import axios from 'axios';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import MoviesList from 'components/MovieList/MoviesList';
import { fetchCategoriesData } from 'configs/fetchData';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { MovieType } from 'ts/types';
import { publicEnvs } from 'configs/envs';

interface Props {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}

const GenresPage: NextPage<Props> = ({ results }) => {
    return (
        <div>
            <Head>
                <title>Movie Time</title>
                <link rel='icon' href='/movieIcon.png' />
            </Head>
            <Header />
            <Navbar />
            <MoviesList moviesArray={results} />
        </div>
    );
};

export default GenresPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { genre } = context.query;

    const request = await axios.get(
        `${publicEnvs.BASE_URL}${
            fetchCategoriesData[genre as string]?.url ??
            fetchCategoriesData.fetchTrending.url
        }`
    );
    return {
        props: request.data,
    };
};
