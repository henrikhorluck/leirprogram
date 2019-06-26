import React from "react";

import { Ingress, Sidetittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import { routes } from "App";

import logo from "./4H-logo.png";
import "./Home.css";
import { LinkPanel } from "../Header/LinkPanel";
import Lenkepanel from "nav-frontend-lenkepanel/lib";

export const Home = () => (
  <PanelBase>
    <Sidetittel>Velkommen til fylkesleir!</Sidetittel>
    <Ingress>Her finner du all oppdatert informasjon du trenger for å få en knall 4H-leir.</Ingress>
    <br />
    <LinkPanel href={routes.events} text="Program" />
    <Lenkepanel
      href="http://volleyball.fylkesleir.no"
      tittelProps="innholdstittel"
      border
    >
      Volleyball
    </Lenkepanel>
    <LinkPanel href={routes.openingHours} text="Åpningstider" />
    <img className="h4logo" src={logo} alt="4H-kløveren" />
  </PanelBase>
);
