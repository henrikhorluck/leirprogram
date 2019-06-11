import { EVENTS_SOURCE_URL } from "./Constants";


export type leirEvent = {
  id: number,
  title: string,
  startTime: string,
  endTime: string,
  description: string,
  warning: string
}

export const getEvents = async () => (await fetch(EVENTS_SOURCE_URL, {})
                            .then(res => res.json()).catch(null)
                            .then(res => res as leirEvent[]).catch(null));

