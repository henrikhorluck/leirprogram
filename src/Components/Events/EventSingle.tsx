import React, { FC } from "react";
import Markdown from "react-markdown";

import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";
import AlertStripe, { AlertStripeType } from "nav-frontend-alertstriper";
import { Undertittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import Ikon, { icons } from "nav-frontend-ikoner-assets";

import { RouterLink } from "../Utils";
import { LeirEvent } from "Core/Api";
import { TimeContainer } from "./TimeContainer";

import "./Event.css";

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

export const Event: FC<LeirEvent> = ({
  id,
  title,
  description,
  warning,
  startTime,
  endTime
}) =>
  description || warning ? (
    <EkspanderbartpanelBase
      heading={
        <div className="eventTitle" id={`${id}`}>
          <TimeContainer startTime={startTime} endTime={endTime} />
          <div className="verticalMiddleContainer">
            <Undertittel>{title}</Undertittel>
          </div>
          {warning && (
            <div className="verticalMiddleContainer">
              <Ikon kind={ikonKind("advarsel")} />
            </div>
          )}
        </div>
      }
      border
    >
      <Markdown source={description} renderers={{ link: RouterLink }} />
      {warning !== "" && <AlertStripe type="advarsel">{warning}</AlertStripe>}
    </EkspanderbartpanelBase>
  ) : (
    <PanelBase border>
      <div className="eventTitle">
        <TimeContainer startTime={startTime} endTime={endTime} />
        <div className="verticalMiddleContainer">
          <Undertittel>{title}</Undertittel>
        </div>
      </div>
    </PanelBase>
  );
