import React, {useEffect, useState} from "react";
import {IWarehouse, IWarehouseDetailView, IWarehouseProps} from "../../interfaces/warehouse.interfaces";
import {createWarehouse, getWarehouses, updateWarehouseDetails} from "../../services/warehouse.service";
import ButtonAppBar from "../header/header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Button, Divider, Grid, InputAdornment, List, ListItem, ListItemButton, Modal, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {ICommodity} from "../../interfaces/commodity.interface";


interface ICommoditiesProps {
    commodities: ICommodity[];
}


export const Commodities: React.FC<ICommoditiesProps | undefined> = (props) => {
    const [commodities, setCommodities] = useState<ICommodity[]>(props!.commodities);


    return (
        <>
            <Box display="flex" justifyContent="center">
                <List sx={{
                    width: '90%',
                    justify: "center",
                    alignItems: "center",
                }}>
                    {commodities.map(commodity => (
                        <ListItem
                            key={commodity.id}
                            disableGutters
                            sx={{
                                border: "2px solid grey",
                                borderRadius: 3,
                                margin: "1%",
                                padding: 0,
                                bgcolor: '#2660a3'
                            }}
                        >
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container columnSpacing={1}>
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle1">{commodity.product_name}</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography
                                            variant="subtitle1">{"expires at " + commodity.expiry_date}</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography
                                            variant="subtitle1">{"weighing " + commodity.weight} kg</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button sx={{zIndex: 99}} onClick={(e) => {
                                            alert("eww brotha");
                                            e?.stopPropagation();
                                        }}>
                                            <DeleteIcon></DeleteIcon>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
};


export const WarehouseDetailView: React.FC<IWarehouseDetailView> = (props) => {
    const [warehouse, setWarehouse] = useState<IWarehouse>(props.warehouse);
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#0059c4',
                border: '2px solid #000',
                boxShadow: 24,
                borderRadius: 3,
                p: 4,
            }}>
                <Button onClick={() => {
                    const name_of_location = "with spread operator in frontend updated";
                    const address = "in frontend updated";
                    const contact_information = "from 29.05.2024";
                    const storage_capacity = 4354353;
                    const capacity = 3454353;
                    const insurance_information = "in frontend updated";
                    const responsible = 4;

                    const warehouse: IWarehouse = {
                        name_of_location: name_of_location,
                        address: address,
                        contact_information: contact_information,
                        storage_capacity: storage_capacity,
                        capacity: capacity,
                        insurance_information: insurance_information,
                        responsible: responsible,
                    }


                    createWarehouse(warehouse);
                }}>create a wearehouse</Button>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {warehouse.name_of_location}
                </Typography>
                <Divider orientation="horizontal" sx={{marginBottom: "5%"}}/>
                <TextField id="outlined-basic" fullWidth label="Location"
                           defaultValue={warehouse?.name_of_location} InputProps={{
                    endAdornment: <InputAdornment position="end">CH</InputAdornment>,
                }}/>
                <Button sx={{color: "grey"}}>Cancel</Button>
                <Button
                    onClick={() => updateWarehouseDetails(warehouse)}>Save</Button>
                <Divider></Divider>

                <Commodities commodities={warehouse.commodities!}></Commodities>
            </Box>
        </Modal>
    );
};

export const Warehouse: React.FC<IWarehouseProps> = (props) => {
    const [warehouse, setWarehouse] = useState<IWarehouse>(props.warehouse);
    const [isDetailViewOpen, setIsDetailViewOpen] = useState<boolean>(false);

    const handleCloseDetailView = () => {
        setIsDetailViewOpen(false);
    };

    return (
        <ListItem
            key={warehouse.id}
            disableGutters
            sx={{
                border: "2px solid grey",
                borderRadius: 3,
                margin: "1%",
                padding: 0,
                bgcolor: '#2660a3'
            }}
        >
            <ListItemButton component="a" href="#simple-list" onClick={() => setIsDetailViewOpen(true)}>
                <Grid container columnSpacing={1}>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">{warehouse.name_of_location}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            variant="subtitle1">{warehouse.address}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            variant="subtitle1">{"weighing " + warehouse.storage_capacity} kg</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button sx={{zIndex: 99}} onClick={(e) => {
                            alert("eww brotha");
                            e?.stopPropagation();
                        }}>
                            <DeleteIcon></DeleteIcon>
                        </Button>
                    </Grid>
                </Grid>
            </ListItemButton>

            {isDetailViewOpen ?
                <WarehouseDetailView warehouse={warehouse} handleClose={handleCloseDetailView}></WarehouseDetailView>
                : null}
        </ListItem>
    );
};
export const Warehouses: React.FC = () => {

    const [warehouses, setWarehouses] = useState<IWarehouse[]>([]);

    useEffect(() => {
        getWarehouses().then((r: { data: IWarehouse[] }) => {
            setWarehouses(r.data);

        });
    }, []);


    return (
        <div className="commodity-component">
            <ButtonAppBar/>
            <div style={{backgroundColor: '#0059c4', minHeight: '100vh', padding: '20px'}}>

                <Typography variant="h3" align="center">Warenhaeuser</Typography>

                <Box display="flex" justifyContent="center">
                    <List sx={{
                        width: '90%',
                        justify: "center",
                        alignItems: "center",
                    }}>
                        {warehouses.map(warehouse => (
                            <Warehouse warehouse={warehouse}></Warehouse>
                        ))}
                    </List>
                </Box>
            </div>
        </div>
    );
};
