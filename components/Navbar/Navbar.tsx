import { contentData } from 'configs/fetchData';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Navbar: FC = () => {
    const router = useRouter();
    const handleClick = (title: string) => () => {
        router.push(`/genres?genre=${title}`);
    };

    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {contentData.map(([key, { title }]) => (
                    <h2
                        onClick={handleClick(key)}
                        className='last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
                        key={key}
                    >
                        {title}
                    </h2>
                ))}
            </div>

            <div className='absolute top-0 left-0 bg-gradient-to-r from-slate-800 h-10 w-1/12 xl:w-[40px]' />
            <div className='absolute top-0 right-0 bg-gradient-to-l from-slate-800 h-10 w-1/12' />
        </nav>
    );
};

export default Navbar;
