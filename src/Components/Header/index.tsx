import React, { FC, useState } from "react";

import { Sidetittel } from "nav-frontend-typografi";
import { EkspanderbartpanelBasePure } from "nav-frontend-ekspanderbartpanel";

import { routes } from "../../App";
import { LinkPanel } from "./LinkPanel";
import "./Header.css";

export const Header: FC = () => {
  const [aapen, setAapen] = useState(true);

  return (
    <header>
      <EkspanderbartpanelBasePure
        apen={aapen}
        onClick={() => setAapen(!aapen)}
        heading={
          <div className="header">
            <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
            <Sidetittel>4H-fylkesleir BTV</Sidetittel>
          </div>
        }
      >
        <nav>
          <div onClick={() =>
            setAapen(!aapen)}>
            <LinkPanel href={routes.home} text="Hjem" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.events} text="Program" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.contact} text="Kontakt" />
          </div>
          <div onClick={() => setAapen(!aapen)}>
            <LinkPanel href={routes.sponsor} text="Sponsor" />
          </div>
        </nav>
      </EkspanderbartpanelBasePure>
    </header>
  );
};
