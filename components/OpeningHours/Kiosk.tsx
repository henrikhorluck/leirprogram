import React, { FC } from "react";
import { OpeningRow } from "./OpeningRow";

import style from "./OpeningHours.less";

export const Kiosk: FC = () => (
  <table className={style.openingHours}>
    <tbody>
      <OpeningRow day="Onsdag" time="15:00 - 21:00" />
      <OpeningRow
        day="Torsdag"
        time={
          <>
            <time>08:00 - 10:00</time>, <time>17:00 - 21:00</time>
          </>
        }
      />
      <OpeningRow
        day="Fredag"
        time={
          <>
            <time>08:00 - 10:00</time>, <time>17:00 - 19:00</time>
          </>
        }
      />
      <OpeningRow day="Lørdag" time="09:00 - 19:00" />
      <OpeningRow
        day="Søndag"
        time={
          <>
            <time>09:00</time> - leirens slutt
          </>
        }
      />
    </tbody>
  </table>
);
