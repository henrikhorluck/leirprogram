import React, { FC } from "react";

import PanelBase from "nav-frontend-paneler";
import { Innholdstittel } from "nav-frontend-typografi";

import { Kiosk } from "./Kiosk";
import { EnvironmentalSquare } from "./EnvironmentalSquare";
import { Office } from "./Office";

import "./OpeningHours.less";

export const OpeningHours: FC = () => (
  <PanelBase>
    <Innholdstittel>Åpningstider kiosk</Innholdstittel>
    <Kiosk />
    <hr />
    <Innholdstittel>Åpningstider miljøtorg</Innholdstittel>
    <EnvironmentalSquare />
    <hr />
    <Innholdstittel>Åpningstider leirkontor</Innholdstittel>
    <Office />
  </PanelBase>
);
