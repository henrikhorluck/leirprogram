import React, { useState } from "react";

import { Hovedknapp } from "nav-frontend-knapper";
import NavFrontendSpinner from "nav-frontend-spinner";

import { getEvents, LeirEventRaw } from "../Core/Api";
import { EventList } from "./EventList";
import { LinkPanel } from "../Header/LinkPanel";
import { routes } from "../Header";

import "nav-frontend-alertstriper-style";
import "nav-frontend-spinner-style";
import "nav-frontend-knapper-style";
import style from "./Event.less";
import { processEvents } from "./eventUtils";

export interface IProps {
  events: LeirEventRaw[];
}

const Events = (props: IProps) => {
  const events = processEvents(props.events);
  const [includePrevious, setIncludePrevious] = useState<boolean>(false);

  return (
    <>
      <LinkPanel
        href={routes.openingHours}
        text="Åpningstider"
        className={style.programAapningstid}
      />
      {events ? (
        includePrevious ? (
          <EventList includePrevious events={events} />
        ) : (
          <>
            {events.length >= 2 &&
              new Date().valueOf() > events[1].startTime.valueOf() &&
              new Date().valueOf() <
                events[events.length - 1].startTime.valueOf() && (
                <Hovedknapp
                  id="showEarlierButton"
                  onClick={() => setIncludePrevious(!includePrevious)}
                >
                  Vis tidligere poster
                </Hovedknapp>
              )}
            {<EventList includePrevious={includePrevious} events={events} />}
          </>
        )
      ) : (
        <NavFrontendSpinner />
      )}
    </>
  );
};

Events.getInitialProps = async function() {
  const data = await getEvents();

  return { events: data };
};

export default Events;
