import React, { FC } from "react";

import Link from "next/link";
import Lenke from "nav-frontend-lenker";

export interface IProps {
  href: string;
  children: JSX.Element[] | JSX.Element;
}

export const RouterLink: FC<IProps> = ({ href, children }) => (
  <Link href={href}>
    <Lenke href={href}>{children}</Lenke>
  </Link>
);
