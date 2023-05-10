import { AiOutlineHome } from 'react-icons/ai';
import { BsPatchCheck, BsSearch, BsCollection } from 'react-icons/bs';
import { GiTrophyCup } from 'react-icons/gi';
import { HeaderIconProps } from '../components/HeaderIcon/HeaderIconIcon';

export const headerIconProps: HeaderIconProps[] = [
    {
        title: 'Home',
        Icon: AiOutlineHome,
        href: '/',
    },
    {
        title: 'Top Rated',
        Icon: GiTrophyCup,
        href: '/top-rated',
    },
    {
        title: 'Genres',
        Icon: BsCollection,
        href: '/genres',
    },
    {
        title: 'Search',
        Icon: BsSearch,
        href: '/search',
    },
    // {
    //   title: 'Account',
    //   Icon: BsPerson,
    //   href:"/"
    // },
];
