import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./pages/landingPage/landingPage";
import Footer from './components/footer/footer';
import DashboardPage from './components/dashboardPage/dashboardPage';
import {LoginPage} from "./pages/landingPage/loginPage";
import {SignUpPage} from "./pages/landingPage/signUpPage";
import { Commodities } from './components/commodities/commodities';


function App() {

    return (
        <>
            <BrowserRouter>
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
