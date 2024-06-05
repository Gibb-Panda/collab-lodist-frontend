import {ICommodity} from "./commodity.interface";

export interface IWarehouse {
    id?: number;
    name_of_location: string;
    address: string;
    contact_information: string;
    storage_capacity: number;
    capacity: number;
    insurance_information: string;
    responsible: number;
    commodities?: ICommodity[];
};


export interface IWarehouseProps {
    warehouse: IWarehouse;
}
export interface IWarehouseDetailView {
    warehouse: IWarehouse;
    handleClose: () => void;
};
