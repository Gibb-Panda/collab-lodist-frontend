import React, {useState} from 'react';
import './App.css';
import {Commodities} from "./components/vehicles/commodities";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/header/header';
import {LandingPage} from "./pages/landingPage/landingPage";
import Footer from './components/footer/footer';
import DashboardPage from './components/dashboardPage/dashboardPage';

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/commodities" element={<Commodities/>}></Route>
                    <Route path="/dashboard" element={<DashboardPage/>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
