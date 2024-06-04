import {ICommodity} from "../interfaces/commodity.interface";
import {BACKEND} from "../configs/backend-api";
import axios from "../configs/axios";


const LOGISTICS = BACKEND.base + BACKEND.api.logistics.base;

export const getCommodities = async (): Promise<{ data: ICommodity[] }> => {
    return axios.get(LOGISTICS + BACKEND.api.logistics.commodities);
}

export const updateCommodity = async (commodity: ICommodity): Promise<{ data: ICommodity[] }> => {
    return axios.put(LOGISTICS + BACKEND.api.logistics.commodities + '/' + commodity.id, {
        ...commodity,
        expiry_date: commodity.expiry_date.toISOString().slice(0, 10)
    });
}

export const createCommodity = async (commodity: ICommodity): Promise<{ data: ICommodity[] }> => {
    alert(commodity.expiry_date.toISOString().slice(0, 10));
    return axios.post(LOGISTICS + BACKEND.api.logistics.commodities, {
        ...commodity,
        expiry_date: commodity.expiry_date.toISOString().slice(0, 10),
        storage_condition_requirement: 1,
        hazardous_goods_class: 1
    });
}

export const deleteCommodity = async (id: number): Promise<{ data: ICommodity[] }> => {
    return axios.delete(`${LOGISTICS}${BACKEND.api.logistics.commodities}/${id}`);
}
