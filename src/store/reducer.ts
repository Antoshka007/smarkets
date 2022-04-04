import { createReducer } from '@reduxjs/toolkit';
import { Event, RequestStatus } from '../types';
import { setEventsAction, setEventsLoadingStatusAction } from './actions';

export type StoreState = {
  events: Record<string, Event>;
  eventsLoadingStatus: RequestStatus;
};

const initialState: StoreState = {
  events: {},
  eventsLoadingStatus: 'IDLE',
};

export const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(setEventsAction, (state, action) => {
      action.payload.forEach((event) => {
        state.events[event.id] = event;
      });
    })
    .addCase(setEventsLoadingStatusAction, (state, action) => {
      state.eventsLoadingStatus = action.payload;
    });
});
