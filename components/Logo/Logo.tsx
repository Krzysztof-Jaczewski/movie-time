import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Logo: FC = () => {
    return (
        <Link href='/'>
            <Image
                src='https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'
                alt=''
                width={150}
                height={70}
            />
        </Link>
    );
};

export default Logo;
