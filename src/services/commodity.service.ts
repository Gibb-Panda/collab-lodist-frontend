import axios from "axios";
import {ICommodity} from "../interfaces/commodity.interface";
import {BACKEND} from "../configs/backend-api";


const LOGISTICS = BACKEND.BACKEND_API_URL + BACKEND.api.logistics.base;

export const getCommodities = async (): Promise<{data: ICommodity[]}> => {
    return axios.get(LOGISTICS + BACKEND.api.logistics.commodities);
}
