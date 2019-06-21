import React, { FC, useEffect, useState } from "react";

import NavFrontendSpinner from "nav-frontend-spinner";

import { getEvents, LeirEvent } from "Core/Api";
import { EventList } from "./EventList";
import { LinkPanel } from "../Header/LinkPanel";
import { routes } from "App";

export const Events: FC = () => {
  const [events, setEvents] = useState<null | LeirEvent[]>(null);

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
      {events ? <EventList events={events} /> : <NavFrontendSpinner />}
    </>
  );
};
