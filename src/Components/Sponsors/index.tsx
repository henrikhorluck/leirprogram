import React, { FC } from "react";

import PanelBase from "nav-frontend-paneler";
import { Sidetittel } from "nav-frontend-typografi";
import AlertStripe from "nav-frontend-alertstriper";


export const Sponsors: FC = () => <PanelBase>
  <Sidetittel>Sponsorer</Sidetittel>
  <br />
  <AlertStripe type="info">Kommer så snart alle logoer er sanket inn</AlertStripe>
</PanelBase>;
