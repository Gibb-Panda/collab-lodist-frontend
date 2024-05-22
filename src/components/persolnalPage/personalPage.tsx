import Header from "../header/header";
import Footer from "../footer/footer";
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function GroupOrientation() {
  const navigate = useNavigate();

  

  return (
    <Box sx={{ bgcolor: '#4597ff', minHeight: '100vh' }}> {/* Set background color of the page */}
      <Header />
      <h1>Personal page</h1>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        
      </Box>

      <Footer />
    </Box>
  );
}