import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Button,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    Modal,
    TextField
} from "@mui/material";
import {createCommodity, deleteCommodity, getCommodities, updateCommodity} from "../../services/commodity.service";
import {ICommodity, ICommodityDetailViewProps, ICommodityProps} from "../../interfaces/commodity.interface";
import ButtonAppBar from "../header/header";


export const CommodityDetailView: React.FC<ICommodityDetailViewProps> = (props) => {
    const [commodity, setCommodity] = useState<ICommodity | null>(props.commodity!);

    return (
        <Modal
            open={true}
            onClose={props.handleClose}
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {commodity?.product_name}
                </Typography>
                <Divider orientation="horizontal" sx={{marginBottom: "5%"}}/>
                <form>
                    <TextField id="outlined-basic" fullWidth label="weight"
                               defaultValue={commodity?.weight}
                               onChange={(e) => setCommodity({...commodity!, weight: parseInt(e.target.value)})}
                               InputProps={{
                                   endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                               }}/>
                    <TextField id="outlined-basic" fullWidth label="product name"
                               defaultValue={commodity?.product_name}
                               onChange={(e) => setCommodity({
                                   ...commodity!,
                                   product_name: e.target.value
                               })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="article number "
                               defaultValue={commodity?.article_number}
                               onChange={(e) => setCommodity({
                                   ...commodity!,
                                   article_number: e.target.value
                               })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="height_dimension"
                               defaultValue={commodity?.height_dimension} onChange={(e) => setCommodity({
                        ...commodity!,
                        height_dimension: parseInt(e.target.value)
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="length_dimension"
                               defaultValue={commodity?.length_dimension} onChange={(e) => setCommodity({
                        ...commodity!,
                        length_dimension: parseInt(e.target.value)
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="country_of_origin"
                               defaultValue={commodity?.country_of_origin} onChange={(e) => setCommodity({
                        ...commodity!,
                        country_of_origin: e.target.value
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="expiry_date"
                               defaultValue={commodity?.expiry_date} onChange={(e) => setCommodity({
                        ...commodity!,
                        expiry_date: new Date(e.target.value)
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="storage_condition_requirement"
                               defaultValue={commodity?.storage_condition_requirement} onChange={(e) => setCommodity({
                        ...commodity!,
                        storage_condition_requirement: parseInt(e.target.value)
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="customs_tariff_number"
                               defaultValue={commodity?.customs_tariff_number} onChange={(e) => setCommodity({
                        ...commodity!,
                        customs_tariff_number: e.target.value
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="packaging_information"
                               defaultValue={commodity?.packaging_information} onChange={(e) => setCommodity({
                        ...commodity!,
                        packaging_information: e.target.value
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="hazardous_goods_class"
                               defaultValue={commodity?.hazardous_goods_class} onChange={(e) => setCommodity({
                        ...commodity!,
                        hazardous_goods_class: parseInt(e.target.value)
                    })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="insurance_value"
                               defaultValue={commodity?.insurance_value} onChange={(e) => setCommodity({
                        ...commodity!,
                        insurance_value: parseInt(e.target.value)
                    })}></TextField>
                    <Button sx={{color: "grey"}}>Cancel</Button>
                    {commodity?.id ?
                        <Button onClick={() => updateCommodity(commodity)}>Save</Button> :
                        <Button onClick={() => createCommodity(commodity!)}>Create</Button>
                    }
                </form>
            </Box>
        </Modal>

    )
};


export const Commodity: React.FC<ICommodityProps> = (props) => {
    const [commodity, setCommodity] = useState<ICommodity>(props.commodity);
    const [isDetailViewOpen, setIsDetailViewOpen] = useState<boolean>(false);

    return (
        <>
            <>
                <ListItem
                    key={commodity.id}
                    disableGutters
                    sx={{
                        border: "2px solid grey",
                        borderColor: "black",
                        borderRadius: 3,
                        margin: "1%",
                        padding: 0,
                        bgcolor: '#4597ff'
                    }}
                    onClick={() => setIsDetailViewOpen(true)}
                >
                    <ListItemButton component="a">
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
                                    deleteCommodity(commodity.id!);
                                }}>
                                    <DeleteIcon></DeleteIcon>
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                {isDetailViewOpen ?
                    <CommodityDetailView commodity={commodity}
                                         handleClose={() => setIsDetailViewOpen(false)}></CommodityDetailView> : null
                }
            </>
        </>
    );
};

export const Commodities: React.FC = () => {
    const [commodities, setCommodities] = useState<ICommodity[]>([]);
    const [open, setOpen] = React.useState(false);
    const [currentOpenCommodity, setCurrentOpenCommodity] = useState<ICommodity | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const handleOpen = (commodity: ICommodity) => {
        setOpen(true);
        setCurrentOpenCommodity(commodities.find(c => c.id == commodity.id)!);

    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getCommodities().then((r: { data: ICommodity[] }) => {
            console.log("htee  commodities: " + JSON.stringify(r));
            setCommodities(r.data);

        });
    }, []);


    return (
        <div className="commodity-component">
            <ButtonAppBar/>
            <div style={{backgroundColor: '#4597ff', minHeight: '100vh', padding: '20px'}}>

                <Typography style={{color: 'black' }} variant="h3" align="center">Waren</Typography>
                <Button style={{color: 'black' }}
                onClick={() => setIsCreateModalOpen(true)}>Neue Ware erstellen</Button>
                {isCreateModalOpen ?
                    <CommodityDetailView commodity={null}
                                         handleClose={() => setIsCreateModalOpen(false)}></CommodityDetailView> :
                    null
                }

                <Box style={{color: 'black' }} display="flex" justifyContent="center">
                    <List sx={{
                        width: '90%',
                        justify: "center",
                        alignItems: "center",
                    }}>
                        {commodities.map(commodity => (
                            <Commodity commodity={commodity}></Commodity>
                        ))}
                    </List>
                </Box>
            </div>
        </div>
    );
};
