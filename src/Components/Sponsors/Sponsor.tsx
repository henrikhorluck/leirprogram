import React, { FC } from "react";
import PanelBase from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";

export interface IProps {
  name: string;
  logo: string;
  url: string;
}

export const Sponsor: FC<IProps> = ({ name, logo, url }) => (
  <Lenke href={url} className="sponsor">
    <PanelBase border>
      <img src={logo} alt={`${name}`} />
    </PanelBase>
  </Lenke>
);
