import { FC, HTMLProps } from 'react';
import NextLink from 'next/link';
import { HtmlProps } from 'next/dist/shared/lib/html-context';

interface Props {
  href: string;
  clasName: string;
}

const Link: FC<
  Props & HTMLProps<HTMLAnchorElement>
> = ({ href, clasName, children }) => {
  return (
    <NextLink href={href}>
      <a className={clasName}>{children}</a>
    </NextLink>
  );
};

export default Link;
