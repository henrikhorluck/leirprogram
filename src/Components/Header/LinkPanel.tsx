import React, { FC } from "react";

import { Link } from "react-router-dom";
import Lenkepanel from "nav-frontend-lenkepanel/lib";

export interface IProps {
  href: string;
  text: string;
  className?: string;
}

export const LinkPanel: FC<IProps> = ({ href, text, className }) => (
  <Lenkepanel
    tittelProps="innholdstittel"
    href={href}
    linkCreator={props => <Link to={href} {...(props as any)} />}
    border
    className={className}
  >
    {text}
  </Lenkepanel>
);
