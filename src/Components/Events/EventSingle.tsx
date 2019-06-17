import React, { FC } from "react";
import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";
import Markdown from "react-markdown";
import AlertStripe, { AlertStripeType } from "nav-frontend-alertstriper";
// @ts-ignore
import Ikon, { icons } from "nav-frontend-ikoner-assets";
import { Element, Undertittel } from "nav-frontend-typografi";
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
  startTime: string;
  endTime: string;
  warning?: string;
}

export const Event: FC<IEvent> = ({ title, description, warning, startTime, endTime }) => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  return (description || warning) ? (
    <EkspanderbartpanelBase
      heading={
        <div className="eventTitle">
          {(startTime || endTime) &&
          <div className="timeContainer">
            {startTime && <Element><time>{startDate.toLocaleTimeString().slice(0, -3)}</time></Element>}
            {endTime && <Element><time>{endDate.toLocaleTimeString().slice(0, -3)}</time></Element>}
          </div>}
          <div className="verticalMiddleContainer">
            <Undertittel>{title}</Undertittel>
          </div>
          {warning && <div className="verticalMiddleContainer"><Ikon kind={ikonKind("advarsel")} /></div>}
        </div>
      }
      border
    >
      <Markdown source={description} />
      {warning !== "" && <AlertStripe type="advarsel">{warning}</AlertStripe>}
    </EkspanderbartpanelBase>
  ) : (
    <PanelBase border>
      <div className="eventTitle">
        {(startTime || endTime) &&
        <div className="timeContainer">
          {startTime && <Element><time>{startDate.toLocaleTimeString('nb-NO').slice(0, -3)}</time></Element>}
          {endTime && <Element><time>{endDate.toLocaleTimeString('nb-NO').slice(0, -3)}</time></Element>}
        </div>}
        <div className="verticalMiddleContainer">
          <Undertittel>{title}</Undertittel>
        </div>
      </div>
    </PanelBase>
  );
};
