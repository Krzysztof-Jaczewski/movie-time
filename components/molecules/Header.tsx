import { FC } from 'react';
import Image from 'next/image';
import HeaderIcon from 'components/atoms/HeaderIcon';
import { headerIconProps } from 'configs/header';
import Link from 'components/atoms/Link';
import Logo from 'components/atoms/Logo';

// import HeaderIcon from './HeaderIcon';

const Header: FC = () => {
  return (
    <header className='flex flex-col gap-5 sm:flex-row m-5 lg:pr-20 justify-between items-center'>
      <div className='flex flex-grow justify-between max-w-xl'>
        {headerIconProps.map(
          ({ title, Icon }) => (
            <HeaderIcon
              key={title}
              title={title}
              Icon={Icon}
            />
          ),
        )}
      </div>
      <Logo />
    </header>
  );
};

export default Header;
