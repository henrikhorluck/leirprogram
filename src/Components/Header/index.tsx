import React from "react";

import { Sidetittel } from "nav-frontend-typografi";
import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";
import Lenkepanel from "nav-frontend-lenkepanel";

import "./Header.css";

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
          <Lenkepanel tittelProps="innholdstittel" href="/" border>Program</Lenkepanel>
          <Lenkepanel tittelProps="innholdstittel" href="/kontakt" border>Kontakt</Lenkepanel>
          <Lenkepanel tittelProps="innholdstittel" href="/sponsor" border>Sponsor</Lenkepanel>
        </nav>
      </EkspanderbartpanelBase>
    </header>
  );
};
