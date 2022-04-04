import React from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner() {
  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Container>
  );
}

export default Spinner;
