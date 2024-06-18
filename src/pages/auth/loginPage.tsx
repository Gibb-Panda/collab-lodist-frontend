import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn} from "../../services/auth.service";
import {setLocalstorage} from "../../services/localstorage.service";
import {Button, Input} from "@mui/material";
import './loginPage.css';


export const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onSignIn = () => {
        signIn({username: username, password: password})
            .then((r: any) => {
                setLocalstorage("accessToken", r.data.access)
                navigate("/dashboard");
            })
    };

    return (
        <>
            <div className="login-page">
            <h1>login</h1>
            <Input className="input-field" placeholder='Benutzername' value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            <Input className="input-field" placeholder='Passwort' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button className="sign-in-button" onClick={() => onSignIn()}>anmelden</Button>
            </div>
        </>
    )
};
