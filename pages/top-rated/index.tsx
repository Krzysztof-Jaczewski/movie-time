import axios from 'axios';
import Header from 'components/molecules/Header';
import Navbar from 'components/molecules/Navbar';
import MoviesList from 'components/molecules/MoviesList';
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

const TopRated: NextPage<Props> = ({ results }) => {
    return (
        <div>
            <Head>
                <title>Movie Time</title>
                <link rel='icon' href='/movieIcon.png' />
            </Head>
            <Header />
            <MoviesList moviesArray={results} /> footer
        </div>
    );
};

export default TopRated;

export const getServerSideProps: GetServerSideProps = async () => {
    const request = await axios.get(
        `${publicEnvs.BASE_URL}${fetchCategoriesData.fetchTopRated.url}`
    );
    return {
        props: request.data,
    };
};
