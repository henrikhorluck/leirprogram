import { LoadingStripe } from "../Utils/LoadingStripe";
import React, { FC, useEffect, useState } from "react";
import { getEvents, leirEvent } from "../../Core/Api";
import { Event } from "./EventSingle";

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
            description={e.description}
            warning={e.warning}
          />
        ))
      ) : (
        <LoadingStripe />
      )}
    </>
  );
};
