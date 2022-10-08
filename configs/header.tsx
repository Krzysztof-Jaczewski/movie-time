import {
  AiOutlineHome,
  AiOutlineThunderbolt,
} from 'react-icons/ai';
import {
  BsPerson,
  BsPatchCheck,
  BsSearch,
  BsCollection,
} from 'react-icons/bs';
import { HeaderIconProps } from '../components/atoms/HeaderIcon';

export const headerIconProps: HeaderIconProps[] =
  [
    {
      title: 'Home',
      Icon: AiOutlineHome,
    },
    {
      title: 'Trending',
      Icon: AiOutlineThunderbolt,
    },
    {
      title: 'Verified',
      Icon: BsPatchCheck,
    },
    {
      title: 'Collection',
      Icon: BsCollection,
    },
    {
      title: 'Search',
      Icon: BsSearch,
    },
    {
      title: 'Account',
      Icon: BsPerson,
    },
  ];
