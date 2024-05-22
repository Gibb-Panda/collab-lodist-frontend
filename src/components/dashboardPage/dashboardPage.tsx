import Header from "../header/header";
import Footer from "../footer/footer";
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function GroupOrientation() {
  const navigate = useNavigate();

  const buttons = [
    <Button key="three" sx={{ bgcolor: '#fdeb8c' }} onClick={() => navigate('/commodities')}>Waren</Button>,
    <Button key="one" sx={{ bgcolor: '#fdeb8c' }} onClick={() => navigate('/personal')}>Persönlich</Button>,
    <Button key="two" sx={{ bgcolor: '#fdeb8c' }} onClick={() => navigate('/management')}>Verwaltung</Button>,
  ];

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
