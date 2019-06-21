import React, { FC } from "react";
import { Normaltekst, Element } from "nav-frontend-typografi";

export interface IProps {
  day: string;
  time: string | JSX.Element;
}

export const OpeningRow: FC<IProps> = ({ day, time }) => (
  <tr>
    <td>
      <Element>{day}</Element>
    </td>
    <td className="hours">
      <Normaltekst>
        {time instanceof String ? <time>{time}</time> : time}
      </Normaltekst>
    </td>
  </tr>
);
