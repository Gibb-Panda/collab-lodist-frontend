import axios from "axios";
import {BACKEND} from "../configs/backend-api";

export const signIn = async (username: string, password: string) => {
    return axios.post(BACKEND.base + BACKEND.api.auth.signIn, {username: username, password: password});
};
