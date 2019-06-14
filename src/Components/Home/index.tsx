import React from 'react';

import { Ingress, Sidetittel } from "nav-frontend-typografi";
import Lenkepanel from "nav-frontend-lenkepanel/lib";
import PanelBase from "nav-frontend-paneler";


export const Home = () => <PanelBase>
    <Sidetittel>Velkommen til fylkesleir for Buskerud, Vestfold og Telemark 2019!</Sidetittel>
    <Ingress>
      På denne siden vil det komme mye spennende info
    </Ingress>

  <Lenkepanel tittelProps="sidetittel" href="http://volleyball.fylkesleir.no" border>Volleyball</Lenkepanel>
  </PanelBase>;
