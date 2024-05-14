import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: 'black' }}>
        <Toolbar>
          <Button color="inherit" sx={{ textTransform: "none" }}>&copy;2024 Collab Lodist</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Impressum</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Datenschutz</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
