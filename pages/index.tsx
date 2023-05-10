import axios from 'axios';
import Header from 'components/Header/Header';
import { fetchCategoriesData } from 'configs/fetchData';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { MovieType } from 'ts/types';
import { publicEnvs } from 'configs/envs';
import MoviesList from 'components/MovieList/MoviesList';

interface Props {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}

const Home: NextPage<Props> = ({ results }) => {
    return (
        <div>
            <Head>
                <title>Movie Time</title>
                <link rel='icon' href='/movieIcon.png' />
            </Head>
            <Header />
            <MoviesList moviesArray={results} />
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const request = await axios.get(
        `${publicEnvs.BASE_URL}${fetchCategoriesData.fetchTrending.url}`
    );
    return {
        props: request.data,
    };
};

