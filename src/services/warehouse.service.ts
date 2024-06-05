import axios from "../configs/axios";
import {BACKEND} from "../configs/backend-api";
import {IWarehouse} from "../interfaces/warehouse.interfaces";


const LOGISTICS = BACKEND.base + BACKEND.api.logistics.base;
const WAREHOUSES = LOGISTICS + BACKEND.api.logistics.warehouses;

export const getWarehouses = async (): Promise<{data: IWarehouse[]}> => {
    return axios.get(WAREHOUSES);
}

export const updateWarehouseDetails = async (warehouse: IWarehouse) => {
    return axios.put(WAREHOUSES + '/' + warehouse.id, {...warehouse});
}

export const createWarehouse = async (warehouse: IWarehouse) => {
    return axios.post(WAREHOUSES, { ...warehouse, horse_power: 0, load_capacity: 0 });
}
