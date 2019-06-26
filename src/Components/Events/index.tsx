import React, { FC, useEffect, useState } from "react";

import NavFrontendSpinner from "nav-frontend-spinner";
import { Hovedknapp } from "nav-frontend-knapper";

import { getEvents, LeirEvent } from "Core/Api";
import { EventList } from "./EventList";
import { LinkPanel } from "../Header/LinkPanel";
import { routes } from "App";

export const Events: FC = () => {
  const [events, setEvents] = useState<null | LeirEvent[]>(null);
  const [includePrevious, setIncludePrevious] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const newEvents = await getEvents();

      setEvents(newEvents);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <LinkPanel
        href={routes.openingHours}
        text="Åpningstider"
        className="programAapningstid"
      />
      {events ? (
        includePrevious ? (
          <EventList includePrevious events={events} />
        ) : (
          <>
            {events.length >= 2 &&
              new Date().valueOf() > events[1].startTime.valueOf() && (
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
