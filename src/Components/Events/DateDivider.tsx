import React, { FC } from "react";

import { Undertekst } from "nav-frontend-typografi";

export const DateDivider: FC<{ date: Date }> = ({ date }) => (
  <div className="dateDivider">
    <div />
    <Undertekst>
      <time>
        {new Intl.DateTimeFormat("nb-NO", {
          weekday: "long",
          month: "long",
          day: "numeric"
        }).format(date)}
      </time>
    </Undertekst>
    <div />
  </div>
);
