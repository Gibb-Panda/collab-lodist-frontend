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
    ListItemText,
    Modal,
    TextField
} from "@mui/material";
import {getCommodities, updateCommodity} from "../../services/commodity.service";
import {ICommodity, ICommodityDetailViewProps, ICommodityProps} from "../../interfaces/commodity.interface";
import ButtonAppBar from "../header/header";


export const CommodityDetailView: React.FC<ICommodityDetailViewProps> = (props) => {
    const [commodity, setCommodity] = useState<ICommodity>(props.commodity);
    const [open, setOpen] = React.useState(false);

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
                    {commodity.product_name}
                </Typography>
                <Divider orientation="horizontal" sx={{marginBottom: "5%"}}/>
                <TextField id="outlined-basic" fullWidth label="weight"
                           defaultValue={commodity?.weight} onChange={(e) => setCommodity({...commodity, weight: parseInt(e.target.value)})} InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}/>
                <Button sx={{color: "grey"}}>Cancel</Button>
                <Button onClick={() => updateCommodity(commodity)}>Save</Button>
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
                        borderRadius: 3,
                        margin: "1%",
                        padding: 0,
                        bgcolor: '#2660a3'
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
                                }}>
                                    <DeleteIcon></DeleteIcon>
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                {isDetailViewOpen ?
                    <CommodityDetailView commodity={commodity} handleClose={() => setIsDetailViewOpen(false)}></CommodityDetailView> : null
                }
            </>
        </>
    );
};

export const Commodities: React.FC = () => {
    const [commodities, setCommodities] = useState<ICommodity[]>([]);
    const [open, setOpen] = React.useState(false);
    const [currentOpenCommodity, setCurrentOpenCommodity] = useState<ICommodity | null>(null);
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
            <div style={{backgroundColor: '#0059c4', minHeight: '100vh', padding: '20px'}}>

                <Typography variant="h3" align="center">Waren</Typography>

                <Box display="flex" justifyContent="center">
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
