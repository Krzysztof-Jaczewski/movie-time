import { FC } from 'react';
import { IconType } from 'react-icons';

export interface HeaderIconProps {
  title: string;
  Icon: IconType;
}

const HeaderIcon: FC<HeaderIconProps> = ({
  title,
  Icon,
}) => {
  return (
    <div className='flex h-12 flex-col items-center cursor-pointer group w-12 sm:w20 text-white'>
      <Icon
        size={32}
        className='h-8 group-hover:animate-bounce'
      />
      <p className='opacity-0 uppercase group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
};

export default HeaderIcon;
