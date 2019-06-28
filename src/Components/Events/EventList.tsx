import React, { FC } from "react";

import { LeirEvent } from "Core/Api";
import { DateDivider } from "./DateDivider";
import { Event } from "./EventSingle";

export interface IProps {
  events: LeirEvent[];
  includePrevious: boolean;
}

export const EventList: FC<IProps> = ({ events, includePrevious }) => {
  let realEvents;
  const now = new Date().valueOf();
  if (
    !includePrevious &&
    now > events[0].startTime.valueOf() &&
    now < events[events.length - 1].startTime.valueOf()
  ) {
    realEvents = events.filter(
      event =>
        event.startTime.valueOf() > now ||
        (event.endTime && event.endTime.valueOf() > now)
    );
  } else {
    realEvents = events;
  }
  const list: JSX.Element[] = [];
  let previousEvent = realEvents[0];

  list.push(
    <DateDivider
      date={previousEvent.startTime}
      key={previousEvent.startTime.toString()}
    />
  );

  for (const event of realEvents) {
    const { id, startTime } = event;

    if (
      startTime !== null &&
      previousEvent.startTime !== null &&
      startTime.getHours() < 10 &&
      startTime.getHours() > 2 &&
      startTime.getHours() - previousEvent.startTime.getHours() > 3
    ) {
      list.push(
        <DateDivider date={event.startTime} key={event.startTime.toString()} />
      );
    }
    list.push(<Event key={id} {...event} />);
    previousEvent = event;
  }

  return <>{list}</>;
};
