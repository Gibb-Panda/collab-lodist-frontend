import React from "react";
import "./landingPage.css";
import logistics from "./img/logistics.jpg";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';




export const LandingPage: React.FC = () => {
  return (
  
  <div style={{ backgroundImage: `url(${logistics})` }}>

  {/* <div className="background"></div> */}
  {/* <img src="./logistics.jpg"/> */}

  <h1>Collab Lodist</h1>;

  <ButtonGroup variant="outlined" size="large" aria-label="Large button group" sx={{bgcolor: 'black'}}>
      <Button>Sign up</Button>
      <Button>Login</Button>
    </ButtonGroup>
  
  </div>
  )
};
