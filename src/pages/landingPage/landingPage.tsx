
import React, { CSSProperties } from "react";
import { Link } from 'react-router-dom';
import "./landingPage.css";
import logistics from "./img/logistics.jpg";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { rm } from "fs";

const landingPageStyle: CSSProperties = {
  backgroundImage: `url(${logistics})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start', 
  padding: '85px',
  paddingTop:'1vh',
};

const buttonGroupStyle: CSSProperties = {
  marginTop: '30px',
};

const buttonStyle: CSSProperties = {
  color: 'white',
  backgroundColor: 'black',
  marginLeft: '10px',
  marginRight: '20px'
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