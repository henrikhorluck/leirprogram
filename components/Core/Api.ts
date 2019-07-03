import { EVENTS_SOURCE_URL } from "./Constants";
import fetch from 'isomorphic-unfetch';

export type LeirEvent = {
  id: number;
  title: string;
  startTime: Date;
  endTime?: Date;
  description: string;
  warning: string;
};

export type LeirEventRaw = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  warning: string;
};

export const getEvents = async () =>
  await fetch(EVENTS_SOURCE_URL, {})
    .then(async res => await res.json() as LeirEventRaw);

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
    .then(res => res as contact[]);
