import React, { FC } from "react";

import { Link } from "react-router-dom";
import Lenke from "nav-frontend-lenker";

export interface IProps {
  href: string;
  children: JSX.Element[] | JSX.Element;
}

export const RouterLink: FC<IProps> = ({ href, children }) =>
  href.match(/^(https?:)?\/\//) ? (
    <Lenke href={href}>{children}</Lenke>
  ) : (
    <Link to={href} className="lenke">
      {children}
    </Link>
  );
