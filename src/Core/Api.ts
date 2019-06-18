import { EVENTS_SOURCE_URL } from "./Constants";

export type LeirEvent = {
  id: number;
  title: string;
  startTime: Date;
  endTime?: Date;
  description: string;
  warning: string;
};

type LeirEventRaw = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  warning: string;
};

const isValidDate = (date: Date) => !isNaN(date.getTime());

export const getEvents = async () =>
  await fetch(EVENTS_SOURCE_URL, {})
    .then(res => res.json())
    .catch(null)
    .then((res: LeirEventRaw[]) =>
      res.map(e => {
        const {startTime, endTime} = e;
        const s = startTime.split(/[^0-9]/).map(el => parseInt(el));
        const end = endTime.split(/[^0-9]/).map(el => parseInt(el));
        const startDate = new Date(s[0], s[1], s[2], s[3], s[4], s[5]);
        const endDate = new Date(end[0], end[1], end[2], end[3], s[4], s[5]);

        return {
          ...e,
          startTime: isValidDate(startDate) ? startDate : null,
          endTime: isValidDate(endDate) ? endDate : null,
        } as LeirEvent;
      })
    )
    .catch(null);

export type contact = {
  id: number;
  title: string;
  name: string;
  club: number;
  phone: number;
  mail: string;
};

export const getContacts = async () =>
  await fetch(EVENTS_SOURCE_URL + "/contact", {})
    .then(res => res.json())
    .catch(null)
    .then(res => res as contact[])
    .catch(null);
