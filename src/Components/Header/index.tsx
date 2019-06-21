import React from "react";

import { Sidetittel } from "nav-frontend-typografi";
import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";

import { routes } from "../../App";
import { LinkPanel } from "./LinkPanel";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <EkspanderbartpanelBase
        heading={
          <div className="header">
            <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
            <Sidetittel>4H-fylkesleir BTV</Sidetittel>
          </div>
        }
      >
        <nav>
          <LinkPanel href={routes.home} text="Hjem" />
          <LinkPanel href={routes.events} text="Program" />
          <LinkPanel href={routes.contact} text="Kontakt" />
          <LinkPanel href={routes.sponsor} text="Sponsor" />
        </nav>
      </EkspanderbartpanelBase>
    </header>
  );
};
