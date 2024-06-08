import axios from "axios";
import {BACKEND} from "../configs/backend-api";
import {ISignInData, ISignUpData} from "../interfaces/auth.interface";

// this function signs in the user in the backend
export const signIn = async (signInData: ISignInData) => {
    return axios.post(BACKEND.base + BACKEND.api.auth.signIn, {username: signInData.username, password: signInData.password});
};

// this function signs up the user in the backend
export const signUp = async (signUpData: ISignUpData) => {
    return axios.post(BACKEND.base + BACKEND.api.auth.signUp, {...signUpData});
};
