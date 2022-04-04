import { AnyAction, createAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { APIType } from '../services/api';
import { Event, RequestStatus } from '../types';
import { StoreState } from './reducer';

type ThunkActionType = ThunkAction<
  void,
  StoreState,
  { api: APIType },
  AnyAction
>;

export const fetchEventsAction = (): ThunkActionType => {
  return async (dispatch, _getState, { api }) => {
    dispatch(setEventsLoadingStatusAction('PENDING'));

    try {
      const events = await api.getEvents();

      dispatch(setEventsAction(events));
      dispatch(setEventsLoadingStatusAction('SUCCESS'));
    } catch (e) {
      dispatch(setEventsLoadingStatusAction('ERROR'));
    }
  };
};

export const setEventsAction = createAction<Event[]>('setEventsAction');
export const setEventsLoadingStatusAction = createAction<RequestStatus>(
  'setEventsLoadingStatusAction'
);
