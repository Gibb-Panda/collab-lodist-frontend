import React, {useState} from 'react';
import './App.css';
import {Commodities} from "./components/vehicles/commodities";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/header/header';
import {LandingPage} from "./pages/landingPage/landingPage";
import Footer from './components/footer/footer';
import DashboardPage from './components/dashboardPage/dashboardPage';
import {LoginPage} from "./pages/landingPage/loginPage";
import {SignUpPage} from "./pages/landingPage/signUpPage";




function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/commodities" element={<Commodities/>}></Route>
                    <Route path="/dashboard" element={<DashboardPage/>}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                    <Route path="/signup" element={<SignUpPage/>}></Route>

                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
