import Header from "../header/header";
import Footer from "../footer/footer";
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function GroupOrientation() {
  const navigate = useNavigate();


  return (
    <Box sx={{ bgcolor: '#4597ff', minHeight: '100vh' }}>
      <Header />
      <h1>Management page</h1>

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