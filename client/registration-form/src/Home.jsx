import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {

  const handleLogout = () => {
    const navigate = Navigate()
    Cookies.remove('token')
    navigate("/login")
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Link href="/about" color="inherit" style={{ marginRight: '20px' }}>
            About
          </Link>
          <Link href="/logout" color="inherit" onClick={handleLogout}>
            logout
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1">
          <img src="https://images.unsplash.com/photo-1673898065602-a40944ddd84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="aeroplane" width={'70%'} />
        </Typography>
      </Container>
    </div>
  );
};

export default Home;

