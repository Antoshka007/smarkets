import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage() {
  return (
    <>
      <Container style={{ textAlign: 'center', paddingTop: '50px' }}>
        <Typography variant="h2">404</Typography>
        <Typography>This page doesn't exist</Typography>
        <Link to={AppRoute.ROOT}>
          <Typography>Go to the main page</Typography>
        </Link>
      </Container>
    </>
  );
}

export default NotFoundPage;
