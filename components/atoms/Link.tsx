import { FC, HTMLProps } from 'react';
import NextLink from 'next/link';

interface Props {
    href: string;
    className?: string;
}

const Link: FC<Props & HTMLProps<HTMLAnchorElement>> = ({
    href,
    className,
    children,
}) => {
    return (
        <NextLink href={href}>
            <a className={className}>{children}</a>
        </NextLink>
    );
};

export default Link;
