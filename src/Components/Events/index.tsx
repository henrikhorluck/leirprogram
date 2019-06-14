import React, { FC, useEffect, useState } from "react";
import { getEvents, leirEvent } from "../../Core/Api";
import { Event } from "./EventSingle";
import NavFrontendSpinner from "nav-frontend-spinner";

export const EventList: FC = () => {
  const [events, setEvents] = useState<null | leirEvent[]>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const newEvents = await getEvents();

      setEvents(newEvents);
    };
    fetchEvents();
  }, []);

  return (
    <>
      {events ? (
        events.map(e => (
          <Event
            key={e.id}
            title={e.title}
            startTime={e.startTime}
            endTime={e.endTime}
            description={e.description}
            warning={e.warning}
          />
        ))
      ) : (
        <NavFrontendSpinner />
      )}
    </>
  );
};
