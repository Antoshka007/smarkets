import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchEventsAction } from '../../store/actions';
import { StoreState } from '../../store/reducer';
import EventPage from '../EventPage/EventPage';
import MainPage from '../MainPage/MainPage';
import Maintenance from '../Maintenance/Maintenance';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Spinner from '../Spinner/Spinner';

function App() {
  const eventsLoadingStatus = useSelector<
    StoreState,
    StoreState['eventsLoadingStatus']
  >((state) => state.eventsLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventsLoadingStatus === 'IDLE') {
      dispatch(fetchEventsAction());
    }
  }, [dispatch, eventsLoadingStatus]);

  if (eventsLoadingStatus === 'PENDING' || eventsLoadingStatus === 'IDLE') {
    return <Spinner />;
  }

  if (eventsLoadingStatus === 'ERROR') {
    return <Maintenance />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
        <Route path={AppRoute.EVENT} element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
