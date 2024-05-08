import React, {useState} from 'react';
import './App.css';
import {Vehicles} from "./components/vehicles/vehicles";

function App() {
    const [value, setValue] = useState(1);

    return (
        <>
            <Vehicles></Vehicles>
        </>
    );
}

export default App;
