import React, { FC } from "react";
import { Normaltekst, Element } from "nav-frontend-typografi";

import style from './OpeningHours.less';

export interface IProps {
  day: string;
  time: string | JSX.Element;
}

export const OpeningRow: FC<IProps> = ({ day, time }) => (
  <tr>
    <td>
      <Element>{day}</Element>
    </td>
    <td className={style.hours}>
      <Normaltekst>
        {time instanceof String ? <time>{time}</time> : time}
      </Normaltekst>
    </td>
  </tr>
);
