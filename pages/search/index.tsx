import Header from 'components/molecules/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const SearchPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Movie Time</title>
                <link rel='icon' href='/movieIcon.png' />
            </Head>
            <Header />
            <p>WORK IN PROGRESS</p>
        </div>
    );
};

export default SearchPage;
