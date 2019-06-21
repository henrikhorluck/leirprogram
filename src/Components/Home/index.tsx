import React from "react";

import { Ingress, Sidetittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import { routes } from "App";

import logo from "./4H-logo.png";
import "./Home.css";
import { LinkPanel } from "../Header/LinkPanel";

export const Home = () => (
  <PanelBase>
    <Sidetittel>
      Velkommen til fylkesleir for Buskerud, Vestfold og Telemark 2019!
    </Sidetittel>
    <Ingress>På denne siden vil det komme mye spennende info 🏗</Ingress>
    <br />
    <LinkPanel href={routes.events} text="Program" />
    <LinkPanel href="http://volleyball.fylkesleir.no" text="Volleyball" />
    <LinkPanel
      href={routes.openingHours}
      text="Åpningstider"
    />
    <img className="h4logo" src={logo} alt="4H-kløveren" />
  </PanelBase>
);
