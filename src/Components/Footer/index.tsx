import React from "react";

import Lenke from "nav-frontend-lenker";

import { CAMP_PHONE } from "Core/Constants";

import facebook from "./facebook.png";
import instagram from "./instagram.png";

import "./Footer.css";

export const Footer = () => (
  <footer>
    <a className="social_logo" href="https://www.facebook.com/Fylkesleir/">
      <img src={facebook} alt="Facebook logo" />
    </a>
    <a
      className="social_logo"
      href="https://www.instagram.com/4hfylkesleir2019/"
    >
      <img src={instagram} alt="Instagram logo" />
    </a>
    <div>
      <address>
        <p>
          Nettside for 4H Buskerud sin fylkesleir 2019{"\n"}
          Tlf: <Lenke href={`tel:+47${CAMP_PHONE}`}>{CAMP_PHONE}</Lenke>
          {"\n"}
          E-post:{" "}
          <Lenke href="mailto: 4hbuskerud@4h.no">4hbuskerud@4h.no</Lenke>
          {"\n"}
          Funnet en feil på nettsiden?{" "}
          <Lenke href="mailto: henrik@horluck.no">Send e-post</Lenke>
        </p>
      </address>
      <div>
        <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
      </div>
    </div>
  </footer>
);
