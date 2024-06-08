import axios from 'axios';
import {getLocalstorage} from "../services/localstorage.service";

/*
 * This is a custom axios instance. The purpose of this custom
 * instance is to add a bearer token to each request. So each
 * request which is using this instance doesn't have to mess
 * around with authorization. Hence this instance has to be
 * used for each request which has to be authenticated.
 */
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
});


/*
 * The bearer token is add to each request using this axios
 * instance through the use * of axios interceptors. These
 * interceptors are executed on each request
 */
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
