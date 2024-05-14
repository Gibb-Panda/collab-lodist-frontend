import React from "react";
import { Link } from 'react-router-dom';
import "./landingPage.css";
import logistics from "./img/logistics.jpg";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export const LandingPage: React.FC = () => {
  return (
    <div style={{ backgroundImage: `url(${logistics})` }}>
      <h1>Collab Lodist</h1>
      <ButtonGroup className="text" variant="outlined" size="large" aria-label="Large button group">
        <Button>Sign up</Button>
        <Button component={Link} to="/login" size="large">Login</Button>
      </ButtonGroup>
    </div>
  );
};