import React from "react";

import PanelBase from "nav-frontend-paneler";
import { Sidetittel } from "nav-frontend-typografi";
import { Sponsor } from "./Sponsor";
import './Sponsor.css';

import logo1 from './sponsors_logos/Flaget.png';
import logo2 from './sponsors_logos/Sparebank 1 Modum.png';
import logo3 from './sponsors_logos/Steg Entreprenør.svg';
import logo4 from './sponsors_logos/Drammen Travbane Drift.jpeg';
import logo5 from './sponsors_logos/Aclima.png';
import logo6 from './sponsors_logos/Stensby Entreprenør.jpg';
import logo7 from './sponsors_logos/Varig Forsikring.jpg';
import logo8 from './sponsors_logos/Modum Regnskapskontor.png';
import logo9 from './sponsors_logos/Geir Bjertnæs.gif';
import logo10 from './sponsors_logos/Account Regnskap.png';

const sponsors = {
  "Flaget": logo1,
  "Sparebank 1 Modum": logo2,
  "Steg Entrepenør": logo3,
  "Drammen Travbane Drift": logo4,
  "Aclima": logo5,
  "Stensby Entreprenør" : logo6,
  "Varig Forsikring": logo7,
  "Modum Regnskapskontor": logo8,
  "Geir Bjertnæs": logo9,
  "Account Regnskap": logo10
};

export const Sponsors = () => {
  const sponsorElements: JSX.Element[] = [];
  Object.entries(sponsors).forEach(
    ([key, value]) => sponsorElements.push(<Sponsor key={key} name={key} imgPath={value}/>)
  );

  return <PanelBase>
    <Sidetittel>Tusen takk til våre sponsorer!</Sidetittel>
    <br />
    { sponsorElements }
  </PanelBase>;
}

