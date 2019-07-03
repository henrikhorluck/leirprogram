import React from "react";

import PanelBase from "nav-frontend-paneler";
import { Sidetittel } from "nav-frontend-typografi";
import { Sponsor } from "./Sponsor";

import "./Sponsor.less";

import logo1 from "./sponsors_logos/Flaget.png";
import logo2 from "./sponsors_logos/Sparebank 1 Modum.png";
import logo3 from "./sponsors_logos/Steg Entreprenør.svg";
import logo4 from "./sponsors_logos/Drammen Travbane Drift.jpeg";
import logo5 from "./sponsors_logos/Aclima.png";
import logo6 from "./sponsors_logos/Stensby Entreprenør.jpg";
import logo7 from "./sponsors_logos/Gjensidige.png";
import logo8 from "./sponsors_logos/Modum Regnskapskontor.png";
import logo9 from "./sponsors_logos/Geir Bjertnæs.gif";
import logo10 from "./sponsors_logos/Account Regnskap.png";
import logo11 from "./sponsors_logos/Buskerud VGS.png";
import logo12 from "./sponsors_logos/Modum Bad.png";
import logo13 from "./sponsors_logos/Felleskjøpet.svg";

const sponsors = [
  {
    name: "Buskerud Videregående Skole",
    logo: logo11,
    url: "http://www.buskerud.vgs.no/"
  },
  { name: "Flaget", logo: logo1, url: "https://flagetas.no/" },
  {
    name: "Sparebank 1 Modum",
    logo: logo2,
    url: "https://www.sparebank1.no/modum/"
  },
  { name: "Steg Entrepenør", logo: logo3, url: "http://steg.no/" },
  { name: "Drammen Travbane Drift", logo: logo4, url: "http://www.drm.no/" },
  { name: "Aclima", logo: logo5, url: "https://www.aclima.no/" },
  {
    name: "Stensby Entreprenør",
    logo: logo6,
    url: "https://www.facebook.com/StensbyEntreprenor/"
  },
  {
    name: "Gjensidige / Varig forsikring",
    logo: logo7,
    url: "https://www.gjensidige.no/msk"
  },
  { name: "Modum Regnskapskontor", logo: logo8, url: "https://www.mrksa.no/" },
  { name: "Geir Bjertnæs", logo: logo9, url: "http://www.bjertnes.as/" },
  {
    name: "Account Regnskap",
    logo: logo10,
    url: "https://www.account-regnskap.no/"
  },
  {
    name: "Modum Bad",
    logo: logo12,
    url: "https://www.modum-bad.no/"
  },
  { name: "Felleskjøpet", logo: logo13, url: "https://www.felleskjopet.no/" }
];

export const Sponsors = () => (
  <PanelBase>
    <Sidetittel>Tusen takk til våre sponsorer!</Sidetittel>
    <br />
    {sponsors.map(sponsor => (
      <Sponsor key={sponsor.name} {...sponsor} />
    ))}
  </PanelBase>
);
