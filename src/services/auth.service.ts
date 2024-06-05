import axios from "axios";
import {BACKEND} from "../configs/backend-api";
import {ISignInData, ISignUpData} from "../interfaces/auth.interface";

export const signIn = async (signInData: ISignInData) => {
    return axios.post(BACKEND.base + BACKEND.api.auth.signIn, {username: signInData.username, password: signInData.password});
};

export const signUp = async (signUpData: ISignUpData) => {
    return axios.post(BACKEND.base + BACKEND.api.auth.signUp, {...signUpData});
};
