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
import {createCommodity, deleteCommodity, getCommodities, updateCommodity} from "../../services/commodity.service";
import {ICommodity, ICommodityDetailViewProps, ICommodityProps} from "../../interfaces/commodity.interface";
import ButtonAppBar from "../header/header";


/**
 * This component renders a modal for displaying and editing commodity details.
 * @param {Object} props - The component props.
 * @param {ICommodity} props.commodity - The initial commodity data.
 * @param {function} props.handleClose - The function to call when the modal is closed.
 * @param {function} props.fetchCommodities - The function to fetch the list of commodities.
 */
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
                <Button onClick={() => props.fetchCommodities()}>fetch commoditieds</Button>
                <form>
                    <TextField id="outlined-basic" fullWidth label="product name"
                               defaultValue={commodity?.product_name}
                               onChange={(e) => setCommodity({
                                   ...commodity!,
                                   product_name: e.target.value
                               })}></TextField>
                    <TextField id="outlined-basic" fullWidth label="weight"
                               defaultValue={commodity?.weight}
                               onChange={(e) => setCommodity({...commodity!, weight: parseInt(e.target.value)})}
                               InputProps={{
                                   endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                               }}/>
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
                        <Button onClick={() => {
                            updateCommodity(commodity)
                                .then(r => {
                                    props.fetchCommodities();
                                    props.handleClose();
                                });
                        }}>Save</Button> :
                        <Button onClick={() => {
                            createCommodity(commodity!)
                                .then(r => {
                                    props.fetchCommodities();
                                    props.handleClose();
                                });
                        }}>Create</Button>
                    }
                </form>
            </Box>
        </Modal>

    )
};


/**
 * This component renders a list item representing a commodity.
 * @param {Object} props - The component props.
 * @param {ICommodity} props.commodity - The commodity object to be displayed.
 * @param {function} props.fetchCommodities - A function to fetch the updated list of commodities.
 *
 * The component displays the commodity's name, expiry date, weight, and a delete button.
 * Clicking on the list item opens a detail view for the commodity.
 * The delete button removes the commodity from the list.
 */
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
                                    e?.stopPropagation();
                                    deleteCommodity(commodity.id!)
                                        .then(r => {
                                            props.fetchCommodities();
                                        });
                                }}>
                                    <DeleteIcon></DeleteIcon>
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                {isDetailViewOpen ?
                    <CommodityDetailView commodity={commodity} fetchCommodities={props.fetchCommodities}
                                         handleClose={() => setIsDetailViewOpen(false)}></CommodityDetailView> : null
                }
            </>
        </>
    );
};

/**
 * This component represents the main view for managing commodities.
 * It fetches and displays a list of commodities, allows creating a new commodity,
 * and opens a detail view for each commodity.
 * It renders a header, a button to create a new commodity,
 * a modal for creating/editing a commodity, and a list of commodities.
 */
export const Commodities: React.FC = () => {
    const [commodities, setCommodities] = useState<ICommodity[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);


    // this function is used to fetch the commodities and also to refetch them on changes
    const fetchCommodities = () => {
        getCommodities().then((r: { data: ICommodity[] }) => {
            setCommodities(r.data);
        });
    };

    // this useEffect is used to fetch all the commodities when this list component gets loaded
    useEffect(() => {
        fetchCommodities();
    }, []);


    return (
        <div className="commodity-component">
            <ButtonAppBar/>
            <div style={{backgroundColor: '#0059c4', minHeight: '100vh', padding: '20px'}}>

                <Typography variant="h3" align="center">Waren</Typography>
                <Button onClick={() => setIsCreateModalOpen(true)}>Create new commodity</Button>
                {isCreateModalOpen ?
                    <CommodityDetailView commodity={null} fetchCommodities={fetchCommodities}
                                         handleClose={() => setIsCreateModalOpen(false)}></CommodityDetailView>
                    : null
                }

                <Box display="flex" justifyContent="center">
                    <List sx={{
                        width: '90%',
                        justify: "center",
                        alignItems: "center",
                    }}>
                        {commodities.map(commodity => (
                            <Commodity key={Math.random()} commodity={commodity}
                                       fetchCommodities={fetchCommodities}></Commodity>
                        ))}
                    </List>
                </Box>
            </div>
        </div>
    );
};
