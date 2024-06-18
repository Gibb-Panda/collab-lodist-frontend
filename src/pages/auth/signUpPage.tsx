import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn, signUp} from "../../services/auth.service";
import {setLocalstorage} from "../../services/localstorage.service";
import {Button, Input} from "@mui/material";
import {ISignUpData} from "../../interfaces/auth.interface";
import './signUpPage.css';


export const SignUpPage: React.FC = () => {
    const [signUpData, setSignUpData] = useState<ISignUpData|null>(null);
    const navigate = useNavigate();

    const onSignUp = () => {
        signUp(signUpData!)
            .then((r: any) => {
                setLocalstorage("accessToken", r.data.access)
                navigate("/dashboard");
            })
    };

    return (
        <> 
            <div className="signup-page">
            <h1>login erstellen</h1>
            <Input className="input-field" placeholder='Benutzername' value={signUpData?.username} onChange={(e) => setSignUpData({...signUpData!, username: e.target.value})}></Input>
            <Input className="input-field" placeholder='Vorname' value={signUpData?.first_name} onChange={(e) => setSignUpData({...signUpData!, first_name: e.target.value})}></Input>
            <Input className="input-field" placeholder='Nachname' value={signUpData?.last_name} onChange={(e) => setSignUpData({...signUpData!, last_name: e.target.value})}></Input>
            <Input className="input-field" placeholder='Email' value={signUpData?.email} onChange={(e) => setSignUpData({...signUpData!, email: e.target.value})}></Input>
            <Input className="input-field" placeholder='Passwort' value={signUpData?.password} onChange={(e) => setSignUpData({...signUpData!, password: e.target.value})}></Input>
            <Button className="sign-up-button" onClick={() => onSignUp()}>Login erstellen</Button>
            </div>
        </>
    )
};
