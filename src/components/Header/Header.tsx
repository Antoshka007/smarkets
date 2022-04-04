import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <>
      <AppBar position="static">
        <Container style={{ padding: 10 }}>
          <Link to={AppRoute.ROOT} style={{ textDecoration: 'none' }}>
            <Typography component="div" color="#fff">
              Smarkets
            </Typography>
          </Link>
        </Container>
      </AppBar>

      <Typography
        variant="h2"
        component="h1"
        mt="50px"
        mb="50px"
        align="center"
      >
        {title}
      </Typography>
    </>
  );
}

export default Header;
