import React, { FC, useState } from "react";

import { Sidetittel } from "nav-frontend-typografi";
import { EkspanderbartpanelBasePure } from "nav-frontend-ekspanderbartpanel";

import { LinkPanel } from "./LinkPanel";

import style from "./Header.less";

export const routes = {
  home: "/",
  contact: "/kontakt",
  events: "/program",
  sponsor: "/sponsor",
  openingHours: "/tider",
  camprules: "/leirregler"
};

export const Header: FC = () => {
  const [aapen, setAapen] = useState(false);

  return (
    <header>
      <EkspanderbartpanelBasePure
        apen={aapen}
        onClick={() => setAapen(!aapen)}
        heading={
          <div className={style.header}>
            <img
              src="/static/android-chrome-192x192.png"
              alt="Fylkesleir log"
            />
            <Sidetittel>4H-fylkesleir BTV</Sidetittel>
          </div>
        }
      >
        <nav>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.home} text="Hjem" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.events} text="Program" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.contact} text="Kontakt" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.camprules} text="Leirregler" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.sponsor} text="Sponsor" />
          </div>
        </nav>
      </EkspanderbartpanelBasePure>
    </header>
  );
};
