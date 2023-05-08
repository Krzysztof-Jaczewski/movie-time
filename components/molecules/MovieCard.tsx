import { publicEnvs } from 'configs/envs';
import Image from 'next/image';
import { FC } from 'react';
import { MovieType } from 'ts/types';
import { BsStarFill } from 'react-icons/bs';

interface Props {
    movieData: MovieType;
}

const MovieCard: FC<Props> = ({ movieData, ...rest }) => {
    const { title, original_title, original_name, vote_average, poster_path } =
        movieData;

    const movieTitle =
        title ?? original_title ?? original_name ?? 'Brak tytułu';
    const voteAverage = vote_average?.toFixed(1) ?? 'brak głosów';

    return (
        <div
            className='flex flex-col gap-5 border rounded  justify-between items-center transition-transform sm:hover:scale-[1.02]'
            {...rest}
        >
            <div className='relative'>
                <Image
                    src={`${publicEnvs.BASE_IMAGE_URL}${poster_path}`}
                    alt={title}
                    width={400}
                    height={500}
                    objectFit='fill'
                    placeholder='blur'
                    blurDataURL={`${publicEnvs.BASE_IMAGE_URL}${poster_path}`}
                />
                <div className='absolute bottom-6 left-4 p-2'>
                    <div className='relative flex items-center justify-center'>
                        <BsStarFill className='text-amber-600 absolute w-14 h-14' />
                        <span className='z-10 bold text-lg'>{voteAverage}</span>
                    </div>
                </div>
            </div>
            <h2 className='flex gap-5 text-2xl pb-5 px-5 whitespace-normal max-w-[400px] text-center'>
                {movieTitle}
            </h2>
        </div>
    );
};

export default MovieCard;
