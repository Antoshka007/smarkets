import React, { ReactEventHandler } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/reducer';
import { Event } from '../../types';
import { getStateColor } from '../../utils/getStateColor';
import Header from '../Header/Header';
import EventTypeIcon from '../EventTypeIcon/EventTypeIcon';
import { AppRoute } from '../../const';

function MainPage() {
  const events = useSelector<StoreState, Event[]>((state) =>
    Object.values(state.events)
  );
  const navigate = useNavigate();

  const handleEventClick: ReactEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigate(new URL(e.currentTarget.href).pathname);
  };

  return (
    <>
      <Header title="Popular Events" />
      <List>
        {events.map((event) => (
          <ListItem key={event.id}>
            <ListItemButton
              component="a"
              href={generatePath(AppRoute.EVENT, { id: event.id })}
              onClick={handleEventClick}
            >
              <ListItemIcon>
                <EventTypeIcon type={event.type} />
              </ListItemIcon>
              <ListItemText
                primary={event.name}
                secondary={
                  <Typography color={getStateColor(event.state)}>
                    {event.state}
                  </Typography>
                }
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default MainPage;
