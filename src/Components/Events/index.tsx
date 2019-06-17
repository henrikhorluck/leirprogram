import React, { FC, useEffect, useState } from "react";
import { getEvents, LeirEvent } from "Core/Api";
import NavFrontendSpinner from "nav-frontend-spinner";
import { EventList } from "./EventList";

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
      {events ? <EventList events={events} /> : (
        <NavFrontendSpinner />
      )}
    </>
  );
};
