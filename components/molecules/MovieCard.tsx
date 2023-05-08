import { publicEnvs } from 'configs/envs';
import Image from 'next/image';
import { FC } from 'react';
import { MovieType } from 'ts/types';

interface Props {
    movieData: MovieType;
}

const MovieCard: FC<Props> = ({ movieData, ...rest }) => {
    const { title, original_title, original_name, vote_average, poster_path } =
        movieData;

    const movieTitle = (() =>
        title ?? original_title ?? original_name ?? 'Brak tytułu')();
    const voteAverage = (() => vote_average?.toFixed(1) ?? 'brak głosów')();

    return (
        <div
            className='flex flex-col gap-5 border rounded m-5  justify-between items-center transition-transform sm:hover:scale-[1.02]'
            {...rest}
        >
            <div className='relative'>
                <Image
                    src={`${publicEnvs.BASE_IMAGE_URL}${poster_path}`}
                    alt={title}
                    width={600}
                    height={700}
                    objectFit='fill'
                    placeholder='blur'
                    blurDataURL={`${publicEnvs.BASE_IMAGE_URL}${poster_path}`}
                />
                <div className='absolute flex items-center justify-center bottom-4 left-2 bg-blue-700 p-2 rounded-full shadow-md text-sm'>
                    {voteAverage}
                </div>
            </div>
            <div className='flex gap-5 text-2xl'>
                <h2>{movieTitle}</h2>
            </div>
        </div>
    );
};

export default MovieCard;
