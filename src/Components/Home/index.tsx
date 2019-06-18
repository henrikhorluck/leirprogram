import React from 'react';

import { Ingress, Sidetittel } from "nav-frontend-typografi";
import Lenkepanel from "nav-frontend-lenkepanel/lib";
import PanelBase from "nav-frontend-paneler";
import { routes } from "App";


export const Home = () => <PanelBase>
    <Sidetittel>Velkommen til fylkesleir for Buskerud, Vestfold og Telemark 2019!</Sidetittel>
    <Ingress>
      På denne siden vil det komme mye spennende info 🏗
    </Ingress>
  <br />
  <Lenkepanel tittelProps="sidetittel" href={routes.events} border>Program</Lenkepanel>
  <br />
  <Lenkepanel tittelProps="sidetittel" href="http://volleyball.fylkesleir.no" border>Volleyball</Lenkepanel>
  </PanelBase>;
