//import axios from "axios";
import {BACKEND} from "../configs/backend-api";
import {IVehicle} from "../interfaces/vehicles.interface";
import vehicles from "../dummyData/vehicles.json";


export const getVehicles = async (): Promise<{ data: IVehicle[] }> => {
    // return axios.get(BACKEND.api.vehicles);

    return new Promise((resolve, reject) => {

        console.log("vehicles: " + JSON.stringify(vehicles));

        const vehicleData: {data: IVehicle[]} = {data: vehicles};

        resolve(vehicleData);
    });


    // try {
    //     const response = await fetch("../dummyData/vehicles.json");
    //     if (!response.ok) {
    //         throw new Error('Failed to fetch vehicles data');
    //     }
    //     const data: IVehicle[] = await response.json();
    //
    // } catch (error: any) {
    //     // Handle error appropriately, you can log or throw it further
    //     throw new Error('Failed to get vehicles data: ' + error.message);
    // }

};

