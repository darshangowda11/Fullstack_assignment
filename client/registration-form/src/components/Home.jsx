import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core';
//import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
//import { useHistory } from 'react-router-dom';
import image from "../assets/nature.jpg";

const Home = () => {
  const style = {
    color: 'white',
    backgroundColor: 'black',
    marginRight: "10px"
  }

 // const history = useHistory();
  const handleLogout = () => {
    //const navigate = Navigate()
    Cookies.remove('token')
    console.log("removed token")
    window.location.href = '/login';
    //<Navigate to="/login" />;
   // history.push('/login')
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
          <button onClick={handleLogout} color="inherit" style={{ marginRight: '20px' }}>
            logout
          </button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1">
        </Typography>
        <img src={image} alt="nature" width="70%" />
      </Container>
    </div>
  );
};

export default Home;

