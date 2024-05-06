import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Vehicles} from "./components/vehicles/vehicles";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { routes } from './configs/routes';
import {icons} from "./interfaces/routes";

function App() {
    const [value, setValue] = useState(1);

    return (
        <>
            <Vehicles></Vehicles>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log("the new vlaue: " + newValue);
                }}
            >
                {routes.map(route => {
                    return (<BottomNavigationAction label={route.name} icon={<DeleteIcon/>}/>);
                })}
                <BottomNavigationAction label="Favorites" icon={<DeleteIcon/>}/>
                <BottomNavigationAction label="Nearby" icon={<DeleteIcon/>}/>
            </BottomNavigation>
        </>
    )
        ;
}

export default App;
