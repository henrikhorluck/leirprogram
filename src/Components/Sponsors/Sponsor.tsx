import React, { FC } from "react";
import PanelBase from "nav-frontend-paneler";

export interface IProps {
  name: string;
  imgPath: string;
}

export const Sponsor:FC<IProps> = ({name, imgPath }) => <PanelBase border className="sponsor">
    <img src={imgPath} alt={`${name}`} />
  </PanelBase>;
