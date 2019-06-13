import React, { FC } from "react";
import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";
import Markdown from "react-markdown";
import AlertStripe, { AlertStripeType } from "nav-frontend-alertstriper";
// @ts-ignore
import Ikon, { icons } from "nav-frontend-ikoner-assets";
import { Undertittel } from "nav-frontend-typografi";
import "./Event.css";
import PanelBase from "nav-frontend-paneler";

const ikonKind = (type: AlertStripeType): icons => {
  const kindMap = {
    "info-sirkel-fyll": type === "info",
    "ok-sirkel-fyll": type === "suksess",
    "advarsel-sirkel-fyll": type === "advarsel",
    "feil-sirkel-fyll": type === "feil"
  };

  return Object.keys(kindMap)
    .map(key => ({ key, predicate: kindMap[key] as boolean }))
    .find(({ predicate }) => predicate)!.key as icons;
};

export interface IEvent {
  title: string;
  description: string;
  warning?: string;
}

export const Event: FC<IEvent> = ({ title, description, warning }) =>
  description ? (
    <EkspanderbartpanelBase
      heading={
        <>
          <Undertittel>{title}</Undertittel>
          {warning && <Ikon kind={ikonKind("advarsel")} />}
        </>
      }
      border
    >
      <Markdown source={description} />
      {warning !== "" && <AlertStripe type="advarsel">{warning}</AlertStripe>}
    </EkspanderbartpanelBase>
  ) : (
    <PanelBase border>
      <Undertittel>{title}</Undertittel>
    </PanelBase>
  );
