import React, {useState} from "react";
import ButtonAppBar from "../../components/header/header";
import {useNavigate} from "react-router-dom";
import {signIn} from "../../services/auth";
import {setLocalstorage} from "../../services/localstorage.service";
import {Button, Input} from "@mui/material";
import {BACKEND} from "../../configs/backend-api";


export const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onSignIn = () => {
        signIn(username, password)
            .then((r: any) => {
                console.log("this is r: " + JSON.stringify(r));
                setLocalstorage("accessToken", r.data.access)
                navigate("/dashboard");
            })
    };

    return (
        <>
            <ButtonAppBar></ButtonAppBar>
            <h1>login</h1>
            <Input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            <Input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={() => onSignIn()}>sign in</Button>
        </>
    )
};
