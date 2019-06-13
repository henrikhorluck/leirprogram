import React from "react";
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
          Leirprogram for 4H Buskerud sin fylkesleir 2019{"\n"}
          Leirsjef: <a href="tel:+47-902-62-220">902 62 220</a>
          {"\n"}
          E-post: <a href="mailto: 4hbuskerud@4h.no">4hbuskerud@4h.no</a>
        </p>
      </address>
      <div>
        <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
      </div>
    </div>
  </footer>
);
