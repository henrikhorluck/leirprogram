import React, { FC } from "react";
import { OpeningRow } from "./OpeningRow";

import style from "./OpeningHours.less";

export const EnvironmentalSquare: FC = () => (
  <table className={style.openingHours}>
    <tbody>
      <OpeningRow day="Onsdag" time="21:00 - 23:30" />
      <OpeningRow day="Torsdag" time="21:00 - 00:00" />
      <OpeningRow day="Fredag" time="21:00 - 01:30" />
      <OpeningRow day="Lørdag" time="21:00 - 01:30" />
      <OpeningRow day="Søndag" time={<>Stengt</>} />
    </tbody>
  </table>
);
