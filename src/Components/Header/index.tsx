import React from "react";

import { Sidetittel } from "nav-frontend-typografi";
import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";
import Lenkepanel from "nav-frontend-lenkepanel";

import "./Header.css";
import { routes } from "../../App";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <header>
      <EkspanderbartpanelBase heading={
        <div className="header">
          <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
          <Sidetittel>Fylkesleir BTV</Sidetittel>
        </div>
        } >
        <nav>
          <Lenkepanel tittelProps="innholdstittel" href="/" linkCreator={(props) => <Link to={routes.home} {...props as any} />} border>Program</Lenkepanel>
          <Lenkepanel tittelProps="innholdstittel" href="/kontakt" linkCreator={(props) => <Link to={routes.contact} {...props as any} />} border>Kontakt</Lenkepanel>
          <Lenkepanel tittelProps="innholdstittel" href="/sponsor" linkCreator={(props) => <Link to={routes.sponsor} {...props as any} />} border>Sponsor</Lenkepanel>
        </nav>
      </EkspanderbartpanelBase>
    </header>
  );
};
