import axios from 'axios';
import {getLocalstorage} from "../services/localstorage.service";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
});

axiosInstance.interceptors.request.use(
    (config: any) => {

        const token = getLocalstorage('accessToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
