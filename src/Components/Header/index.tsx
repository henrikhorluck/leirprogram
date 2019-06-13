import React, { useState } from "react";
import { Sidetittel } from "nav-frontend-typografi";
import "./Header.css";
import NavFrontendChevron from "nav-frontend-chevron";
import { Navigation } from "../Navigation";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavigation = () => {
    const nav = document.getElementById("navigation");
    if (nav) {
      if (nav.style.left !== "0px") {
        nav.style.left = "0";
      } else {
        nav.style.left = "100%";
      }
    }
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="header">
        <img src="./android-chrome-192x192.png" alt="Fylkesleir log" />
        <Sidetittel>Fylkesleir BTV</Sidetittel>
        <div onClick={toggleNavigation}>
          <NavFrontendChevron
            stor
            className="navigationChevron"
            type={navOpen ? "høyre" : "venstre"}
          />
        </div>
      </header>
      <Navigation toggleNav={toggleNavigation}/>
    </>
  );
};
