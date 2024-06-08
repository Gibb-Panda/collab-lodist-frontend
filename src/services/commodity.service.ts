import {ICommodity} from "../interfaces/commodity.interface";
import {BACKEND} from "../configs/backend-api";
import axios from "../configs/axios";


// Base URL for logistics API
const LOGISTICS = BACKEND.base + BACKEND.api.logistics.base;

// service to fetch all commodities
export const getCommodities = async (): Promise<{ data: ICommodity[] }> => {
    return axios.get(LOGISTICS + BACKEND.api.logistics.commodities);
}

// service to update a commodity
export const updateCommodity = async (commodity: ICommodity): Promise<{ data: ICommodity[] }> => {
    // Convert expiry_date to ISO string format (YYYY-MM-DD)
    const expiryDateString = new Date(commodity.expiry_date).toISOString().slice(0, 10);


    return axios.put(LOGISTICS + BACKEND.api.logistics.commodities + '/' + commodity.id, {
        ...commodity,
        expiry_date: expiryDateString
    });
}

// service to create a new commodity
export const createCommodity = async (commodity: ICommodity): Promise<{ data: ICommodity[] }> => {
    return axios.post(LOGISTICS + BACKEND.api.logistics.commodities, {
        ...commodity,
        expiry_date: commodity.expiry_date.toISOString().slice(0, 10),
        storage_condition_requirement: 1, // is hard coded because it's not working yet in the backend anyways
        hazardous_goods_class: 1 // same here as above
    });
}

// service to delete a commodity
export const deleteCommodity = async (id: number): Promise<{ data: ICommodity[] }> => {
    return axios.delete(`${LOGISTICS}${BACKEND.api.logistics.commodities}/${id}`);
}
