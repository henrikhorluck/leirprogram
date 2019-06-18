import { Element } from "nav-frontend-typografi";
import React from "react";

export interface IProps {
  startTime?: Date;
  endTime?: Date;
}

export const TimeContainer = ({ startTime, endTime }: IProps) =>
  startTime || endTime ? (
    <div className="timeContainer">
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
