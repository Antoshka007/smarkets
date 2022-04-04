import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import { StoreState } from '../../store/reducer';
import { Event } from '../../types';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { getStateColor } from '../../utils/getStateColor';
import Header from '../Header/Header';
import EventTypeIcon from '../EventTypeIcon/EventTypeIcon';

function EventPage() {
  const { id = '' } = useParams();
  const event = useSelector<StoreState, Event>((state) => state.events[id]);

  if (!event) return <NotFoundPage />;

  return (
    <>
      <Header title={event.name} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>
                <Tooltip title={event.type.domain}>
                  <Icon>
                    <EventTypeIcon type={event.type} />
                  </Icon>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell style={{ color: getStateColor(event.state) }}>
                {event.state}
              </TableCell>
            </TableRow>
            {event.startDatetime ? (
              <TableRow>
                <TableCell>Start Date</TableCell>
                <TableCell>{getFormattedDate(event.startDatetime)}</TableCell>
              </TableRow>
            ) : null}
            {event.endDate ? (
              <TableRow>
                <TableCell>End Date</TableCell>
                <TableCell>
                  {getFormattedDate(event.endDate, { withoutTime: true })}
                </TableCell>
              </TableRow>
            ) : null}
            <TableRow>
              <TableCell>Bet Allowed</TableCell>
              <TableCell>{event.betAllowed ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EventPage;
