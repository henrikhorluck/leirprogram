import React, { FC } from "react";
import Markdown from "react-markdown";

import { EkspanderbartpanelBase } from "nav-frontend-ekspanderbartpanel";
import AlertStripe, { AlertStripeType } from "nav-frontend-alertstriper";
import { Undertittel } from "nav-frontend-typografi";
import PanelBase from "nav-frontend-paneler";
import Ikon from "nav-frontend-ikoner-assets";

import { RouterLink } from "../Utils";
import { LeirEvent } from "../Core/Api";
import { TimeContainer } from "./TimeContainer";

import style from "./Event.less";

const ikonKind = (type: AlertStripeType) => {
  const kindMap = {
    info: "info-sirkel-fyll",
    suksess: "ok-sirkel-fyll",
    advarsel: "advarsel-sirkel-fyll",
    feil: "feil-sirkel-fyll"
  };

  return kindMap[type];
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
        <div className={style.eventTitle} id={`${id}`}>
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
      <div className={style.eventTitle}>
        <TimeContainer startTime={startTime} endTime={endTime} />
        <div className={style.verticalMiddleContainer}>
          <Undertittel>{title}</Undertittel>
        </div>
      </div>
    </PanelBase>
  );
