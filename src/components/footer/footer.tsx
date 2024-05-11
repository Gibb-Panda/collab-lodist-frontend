import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor: 'black'}}>
        <Toolbar>
        
            
          
          <Button color="inherit" sx={{textTransform: "none"}}>&copy;2024 Collab Lodist</Button>
          <Button color="inherit"sx={{textTransform: "none"}} >Impressum</Button>
          <Button color="inherit"sx={{textTransform: "none"}} >Datenschutz</Button>
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}




// export const Footer: React.FC = () => {
//     return (
//         <h1>hello header</h1>
//     );
// }