import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import "./Header.css";

export const Header = () =>
  <header className="header">
    <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
    <Sidetittel>Fylkesleir BTV</Sidetittel>
  </header>;
