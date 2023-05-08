import Link from 'components/atoms/Link';
import { FC } from 'react';
import { IconType } from 'react-icons';

export interface HeaderIconProps {
    title: string;
    Icon: IconType;
    href: string;
}

const HeaderIcon: FC<HeaderIconProps> = ({ title, Icon, href }) => {
    return (
        <Link href={href}>
            <div className='flex h-14 flex-col items-center cursor-pointer group w-18 sm:w20 text-white'>
                <Icon className='h-10 w-10 group-hover:animate-bounce' />
                <p className='opacity-0 uppercase group-hover:opacity-100 tracking-widest'>
                    {title}
                </p>
            </div>
        </Link>
    );
};

export default HeaderIcon;
