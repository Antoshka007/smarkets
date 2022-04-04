import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Event } from '../../types';

type EventTypeIconProps = {
  type: Event['type'];
};

function EventTypeIcon({ type }: EventTypeIconProps) {
  return type.domain === 'football' ? <SportsSoccerIcon /> : <EventIcon />;
}

export default EventTypeIcon;
