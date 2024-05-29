import {ICommodity} from "../interfaces/commodity.interface";
import {BACKEND} from "../configs/backend-api";
import axios from "../configs/axios";


const LOGISTICS = BACKEND.base + BACKEND.api.logistics.base;

export const getCommodities = async (): Promise<{data: ICommodity[]}> => {
    return axios.get(LOGISTICS + BACKEND.api.logistics.commodities);
}

export const updateCommodity = async (commodity: ICommodity): Promise<{data: ICommodity[]}> => {
    return axios.put(LOGISTICS + BACKEND.api.logistics.commodities + '/' + commodity.id, {...commodity, expiry_date: '2025-05-05'});
}
