import Header from "../header/header";
import Footer from "../footer/footer";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="three" sx={{ bgcolor: '#fdeb8c' }}>Waren</Button>,
  <Button key="one" sx={{ bgcolor: '#fdeb8c' }}>Persönlich</Button>,
  <Button key="two" sx={{ bgcolor: '#fdeb8c' }}>Verwaltung</Button>,
];

export default function GroupOrientation() {
  return (
    <Box sx={{ bgcolor: '#4597ff', minHeight: '100vh' }}> {/* Set background color of the page */}
      <Header />
      <h1>Menü</h1>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
        >
          {buttons}
        </ButtonGroup>
      </Box>

      <Footer />
    </Box>
  );
}
