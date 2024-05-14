
import React, { CSSProperties } from "react";
import { Link } from 'react-router-dom';
import "./landingPage.css";
import logistics from "./img/logistics.jpg";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const landingPageStyle: CSSProperties = {
  backgroundImage: `url(${logistics})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-end', // Align items to the right side of the container
  padding: '20px',
};

const buttonGroupStyle: CSSProperties = {
  marginTop: '50px', // Move the buttons higher
};

const buttonStyle: CSSProperties = {
  color: 'white', // Set text color to white
  backgroundColor: 'black', // Set background color to black
};

const titleStyle: CSSProperties = {
  color: 'black',
}



export const LandingPage: React.FC = () => {
  return (
    <div style={landingPageStyle}>
      <div style={titleStyle}>
      <h1>Collab Lodist</h1>
      </div>
      <div style={{ ...buttonGroupStyle, marginRight: '20px' }}>
        <ButtonGroup className="text" variant="outlined" size="large" aria-label="Large button group">
          <Button component={Link} to="/signup" size="large" style={buttonStyle}>Sign up</Button>
          <Button component={Link} to="/login" size="large" style={buttonStyle}>Login</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};