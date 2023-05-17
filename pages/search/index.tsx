import Header from 'components/Header/Header';
import MoviesList from 'components/MovieList/MoviesList';
import debounce from 'lodash/debounce';
import { useSearchMovies } from 'modules/search/queries';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';

const SearchPage: NextPage = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = debounce(
        (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value),
        300
    );

    const { data } = useSearchMovies(query);

    return (
        <div className='grid'>
            <Head>
                <title>Movie Time</title>
                <link rel='icon' href='/movieIcon.png' />
            </Head>
            <Header />
            <input
                type='text'
                onChange={handleInputChange}
                placeholder='Wpisz tytuł filmu'
                className='text-gray-900 w-9/12 justify-self-center rounded p-2'
            />
            <MoviesList moviesArray={data?.results} />
        </div>
    );
};

export default SearchPage;
