import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate, Link} from "react-router-dom";


export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSelect = (route: string) => {
        setAnchorEl(null);
        navigate(route);
    };

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing tokens)
        navigate('/');  // Redirect to the home route
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{bgcolor: 'black'}}>
                <Toolbar>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleSelect}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => handleSelect("/dashboard")}>Dashboard</MenuItem>
                        <MenuItem onClick={() => handleSelect("/commodities")}>Waren</MenuItem>
                        <MenuItem onClick={() => handleSelect("/personal")}>Persönlich</MenuItem>
                        <MenuItem onClick={() => handleSelect("/management")}>Verwaltung</MenuItem>
                        {/* <MenuItem onClick={() => handleSelect("/logistics")}>Logistik</MenuItem> */}
                    </Menu>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}} id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}

                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Collab Lodist
                        </Link>
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


