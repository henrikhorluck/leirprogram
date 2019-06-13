import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Innholdstittel from "nav-frontend-typografi/lib/innholdstittel";

export const Navigation = () => (
  <div id="navigation">
    <Sidetittel>Fylkesleir BTV</Sidetittel>
    <Link to="/">
      <Innholdstittel>Program</Innholdstittel>
    </Link>
    <Link to="/kontakt">
      <Innholdstittel>Kontakt</Innholdstittel>
    </Link>
    <Link to="/sponsor">
      <Innholdstittel>Sponsor</Innholdstittel>
    </Link>
  </div>
);
