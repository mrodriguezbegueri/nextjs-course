"use client";

import NextLink from "next/link";
import { FC } from "react";

interface Props {
    href: string,
    title: string
}

export const NextLinkPage:FC<Props> = ({ href, title }) => {
  return (
    <NextLink href={href} passHref>
      {/* <Link> */}
        <h2 color="white"> { title } </h2>
      {/* </Link> */}
    </NextLink>
  );
};
