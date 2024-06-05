import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn} from "../../services/auth";
import {setLocalstorage} from "../../services/localstorage.service";
import {Button, Input} from "@mui/material";


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
            <h1>sign in</h1>
            <Input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            <Input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={() => onSignIn()}>sign in</Button>
        </>
    )
};
