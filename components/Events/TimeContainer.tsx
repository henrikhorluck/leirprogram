import { Element } from "nav-frontend-typografi";
import React from "react";

import style from "./Event.less";

export interface IProps {
  startTime?: Date;
  endTime?: Date;
}

export const TimeContainer = ({ startTime, endTime }: IProps) =>
  startTime || endTime ? (
    <div className={style.timeContainer}>
      {startTime && (
        <Element>
          <time>{startTime.toLocaleTimeString("nb-NO").slice(0, -3)}</time>
        </Element>
      )}
      {endTime && (
        <Element>
          <time>{endTime.toLocaleTimeString("nb-NO").slice(0, -3)}</time>
        </Element>
      )}
    </div>
  ) : null;
