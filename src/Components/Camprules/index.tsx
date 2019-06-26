import React from 'react';
import ReactMarkdown from "react-markdown";
import { Sidetittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";

const text = "1. Alkohol eller andre rusmidler hører ikke hjemme i 4H. Det er forbudt å oppbevare og/eller nyte alkohol og andre rusmidler. Tobakk inkl. snus, samt energidrikker er ikke tillatt.\n" +
  "2. 4H-ere har ikke lov til å forlate leirområdet uten tillatelse.\n" +
  "3. Du må ha tillatelse fra lederen din for å forlate området eller gruppen din. Ta kontakt med leirkontoret for inn- og utsjekk.\n" +
  "4. Vær morgenfugl, og møt opp til flaggheising.\n" +
  "5. Bruk av åpen ild er forbudt.\n" +
  "6. Vær presis.\n" +
  "7. Det skal være ro i teltleiren mellom klokka 23.00 og 07.00\n" +
  "8. Møteplass ved akutt hendelse eller brann er **på ridebanen**. \n" +
  "9. Smil og vær glad, så smiler andre tilbake til deg. \n" +
  "\n" +
  "Brudd på reglene kan medføre hjemsendelse.\n" +
  "Både deltakere, ledere og gjester må følge reglene. \n"

export const CampRules = () => <PanelBase>
  <Sidetittel>Leirregler</Sidetittel>
  <ReactMarkdown source={text} />
  </PanelBase>;

