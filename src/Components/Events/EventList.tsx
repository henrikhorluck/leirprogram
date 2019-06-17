import React, { FC } from "react";
import { Event } from "./EventSingle";
import { LeirEvent } from "Core/Api";
import { DateDivider } from "./DateDivider";

export interface IProps {
  events: LeirEvent[];
}

export const EventList: FC<IProps> = ({ events }) => {
  const list: JSX.Element[] = [];
  let previousEvent = events[0];

  list.push(<DateDivider date={previousEvent.startTime} key={previousEvent.startTime.toString()}/>);

  for (const event of events) {
    const { id, title, startTime, endTime, description, warning } = event;

    if (
      startTime !== null &&
      previousEvent.startTime !== null &&
      startTime.getHours() < 10 &&
      startTime.getHours() > 2 &&
      startTime.getHours() - previousEvent.startTime.getHours() > 3
    ) {
      list.push(<DateDivider date={event.startTime} key={event.startTime.toString()}/>);
    }
    list.push(
      <Event
        key={id}
        id={id}
        title={title}
        startTime={startTime}
        endTime={endTime}
        description={description}
        warning={warning}
      />
    );
    previousEvent = event;
  }

  return <>{list}</>;
};
