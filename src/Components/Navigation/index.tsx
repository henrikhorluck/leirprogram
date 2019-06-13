import React, { FC } from "react";
import { Sidetittel } from "nav-frontend-typografi";
// import { Link } from "react-router-dom";
import "./Navigation.css";
import Lenkepanel from "nav-frontend-lenkepanel";
import "nav-frontend-lenkepanel-style";

export interface IProps {
  toggleNav: () => void;
}

/*<Link to="/" onClick={toggleNav}>
      <Innholdstittel>Program</Innholdstittel>
    </Link>
    <Link to="/kontakt" onClick={toggleNav}>
      <Innholdstittel>Kontakt</Innholdstittel>
    </Link>
    <Link to="/sponsor" onClick={toggleNav}>
      <Innholdstittel>Sponsor</Innholdstittel>
    </Link>*/

export const Navigation: FC<IProps> = ({ toggleNav }) => (
  <div id="navigation">
    <Sidetittel>Fylkesleir BTV</Sidetittel>
    <Lenkepanel tittelProps="innholdstittel" href="/" border>Program</Lenkepanel>
    <Lenkepanel tittelProps="innholdstittel" href="/kontakt" border>Kontakt</Lenkepanel>
    <Lenkepanel tittelProps="innholdstittel" href="/sponsor" border>Sponsor</Lenkepanel>
  </div>
);
