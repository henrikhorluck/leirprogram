import React, { FC } from "react";

import Lenkepanel from "nav-frontend-lenkepanel/lib";
import Link from "next/link";

export interface IProps {
  href: string;
  text: string;
  className?: string;
}

export const LinkPanel: FC<IProps> = ({ href, text, className }) => (
  <Lenkepanel
    tittelProps="innholdstittel"
    href={href}
    linkCreator={props => (
      <Link href={href}>
        <a {...(props as any)} />
      </Link>
    )}
    border
    className={className}
  >
    {text}
  </Lenkepanel>
);
