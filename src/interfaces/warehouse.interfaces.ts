import {ICommodity} from "./commodity.interface";

// IWarehouse representes a warehouse
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


// IWarehouse representes the properties of the warehouse component
export interface IWarehouseProps {
    warehouse: IWarehouse;
}

// IWarehouse representes the properties of the warehouse detail view component
export interface IWarehouseDetailView {
    warehouse: IWarehouse;
    handleClose: () => void;
};
