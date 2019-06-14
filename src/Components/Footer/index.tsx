import React from "react";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import "./Footer.css";
import Lenke from "nav-frontend-lenker";

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
          Tlf: <Lenke href="tel:+47-902-62-220">902 62 220</Lenke>
          {"\n"}
          E-post: <Lenke href="mailto: 4hbuskerud@4h.no">4hbuskerud@4h.no</Lenke>
        </p>
      </address>
      <div>
        <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
      </div>
    </div>
  </footer>
);
