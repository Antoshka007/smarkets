import { BackendEvent, Event } from '../../types';
import { adaptEvent } from './adapters';

const PROXY_URL = 'https://proxy-sooty.vercel.app/api/proxy/';
const API_URL = 'https://api.smarkets.com/v3';

const request = (url: string) => {
  return fetch(`${PROXY_URL}?url=${encodeURIComponent(url)}`).then((response) =>
    response.json()
  );
};

export const createAPI = () => {
  return {
    getEvents: (): Promise<Event[]> => {
      return request(`${API_URL}/popular/event_ids/sport/football/`)
        .then(({ popular_event_ids }: { popular_event_ids: string[] }) => {
          const eventsIds = popular_event_ids.join(',');

          return request(`${API_URL}/events/${eventsIds}/?with_new_type=true`);
        })
        .then(({ events }: { events: BackendEvent[] }) => {
          return events.map(adaptEvent);
        });
    },
  };
};

export type APIType = ReturnType<typeof createAPI>;
