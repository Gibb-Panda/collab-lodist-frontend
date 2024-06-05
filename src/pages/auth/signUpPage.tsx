import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn, signUp} from "../../services/auth.service";
import {setLocalstorage} from "../../services/localstorage.service";
import {Button, Input} from "@mui/material";
import {ISignUpData} from "../../interfaces/auth.interface";


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
            <h1>sign up</h1>
            <Input placeholder='username' value={signUpData?.username} onChange={(e) => setSignUpData({...signUpData!, username: e.target.value})}></Input>
            <Input placeholder='firstname' value={signUpData?.first_name} onChange={(e) => setSignUpData({...signUpData!, first_name: e.target.value})}></Input>
            <Input placeholder='lastname' value={signUpData?.last_name} onChange={(e) => setSignUpData({...signUpData!, last_name: e.target.value})}></Input>
            <Input placeholder='email' value={signUpData?.email} onChange={(e) => setSignUpData({...signUpData!, email: e.target.value})}></Input>
            <Input placeholder='password' value={signUpData?.password} onChange={(e) => setSignUpData({...signUpData!, password: e.target.value})}></Input>
            <Button onClick={() => onSignUp()}>sign in</Button>
        </>
    )
};
