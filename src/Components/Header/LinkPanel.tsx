import React, { FC } from "react";

import { Link } from "react-router-dom";
import Lenkepanel from "nav-frontend-lenkepanel/lib";

export interface IProps {
  href: string;
  text: string;
}

export const LinkPanel: FC<IProps> = ({ href, text }) => (
  <Lenkepanel
    tittelProps="innholdstittel"
    href={href}
    linkCreator={props => <Link to={href} {...(props as any)} />}
    border
  >
    {text}
  </Lenkepanel>
);
