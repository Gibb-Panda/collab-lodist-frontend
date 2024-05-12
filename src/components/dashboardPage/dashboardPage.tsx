import Header from "../header/header";
import Footer from "../footer/footer";import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">Persönlich</Button>,
  <Button key="two">Verwaltung</Button>,
  <Button key="three">Logistik</Button>,
];

export default function GroupOrientation() {
  return (
    <>
    
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <Header />
      <h1>I am the dashboard</h1>
      
      {/* <ButtonGroup orientation="vertical" aria-label="Vertical button group">
        {buttons}
      </ButtonGroup> */}
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      {/* <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup> */}
      <Footer />
    </Box>
  
    </>
  );
}



// function Dashboard() {

//     return (
//         <>
//         <Header />
//         <h1>I am the dashboard</h1>
//         <Footer />
//         </>
//     )
// }