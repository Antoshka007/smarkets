import { EventState } from '../types';

export const getStateColor = (state: EventState): string => {
  const defaultColor = '#9e9e9e';
  const stateToColor: Record<EventState, string> = {
    new: '#03a9f4',
    upcoming: '#03a9f4',
    live: '#8bc34a',
    ended: '#9e9e9e',
    settled: '#9e9e9e',
    cancelled: '#f44336',
    suspended: '#ffeb3b',
  };

  return stateToColor[state] ?? defaultColor;
};
