import React, {useEffect, useState} from "react";
import {IVehicle} from "../../interfaces/vehicles.interface";
import {getVehicles} from "../../services/vehicles.service";
import {alpha, CommonColors} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import {visuallyHidden} from "@mui/utils";
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
import {getCommodities} from "../../services/commodity.service";
import {ICommodity} from "../../interfaces/commodity.interface";


interface Data {
    id: number;
    // calories: number;
    // carbs: number;
    // fat: number;
    // name: string;
    // protein: number;
    license_plate_number: string;
    vehicle_model: string;
    year_of_manufacture: number;
    vin_identification_number: string;
    horse_power: number;
    capacity: number;
    load_capacity: number;
    insurance_information: string;
    tour: number;
}

// function createData(
//     id: number,
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ): Data {
//     return {
//         id,
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//     };
// }

//     [
//     createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
//     createData(2, 'Donut', 452, 25.0, 51, 4.9),
//     createData(3, 'Eclair', 262, 16.0, 24, 6.0),
//     createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
//     createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
//     createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
//     createData(9, 'KitKat', 518, 26.0, 65, 7.0),
//     createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
//     createData(11, 'Marshmallow', 318, 0, 81, 2.0),
//     createData(12, 'Nougat', 360, 19.0, 9, 37.0),
//     createData(13, 'Oreo', 437, 18.0, 63, 4.0),
// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: "license_plate_number",
        numeric: false,
        disablePadding: true,
        label: "license plate number",
    },
    {
        id: "vehicle_model",
        numeric: true,
        disablePadding: false,
        label: "vehicle model",
    },
    {
        id: "year_of_manufacture",
        numeric: true,
        disablePadding: false,
        label: "year of manufacture",
    },
    {
        id: "vin_identification_number",
        numeric: true,
        disablePadding: false,
        label: "vin identification number",
    },
    {
        id: "horse_power",
        numeric: true,
        disablePadding: false,
        label: "horse power",
    },
    {
        id: "capacity",
        numeric: true,
        disablePadding: false,
        label: "capacity",
    },
    {
        id: "load_capacity",
        numeric: true,
        disablePadding: false,
        label: "load capacity",
    },
    {
        id: "insurance_information",
        numeric: true,
        disablePadding: false,
        label: "insurance information",
    },
    {
        id: "tour",
        numeric: true,
        disablePadding: false,
        label: "tour",
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: "1 1 100%"}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: "1 1 100%"}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("load_capacity");
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState<IVehicle[]>([]);

    useEffect(() => {
        getVehicles().then((r) => {
            setRows(r.data);
        });
    }, []);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <Box sx={{width: "100%"}}>
            <Paper sx={{width: "100%", mb: 2}}>
                <EnhancedTableToolbar numSelected={selected.length}/>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{cursor: "pointer"}}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    "aria-labelledby": labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.license_plate_number}
                                        </TableCell>
                                        <TableCell align="right">{row.vehicle_model}</TableCell>
                                        <TableCell align="right">
                                            {row.year_of_manufacture}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.vin_identification_number}
                                        </TableCell>
                                        <TableCell align="right">{row.horse_power}</TableCell>
                                        <TableCell align="right">{row.capacity}</TableCell>
                                        <TableCell align="right">{row.load_capacity}</TableCell>
                                        <TableCell align="right">
                                            {row.insurance_information}
                                        </TableCell>
                                        <TableCell align="right">{row.tour}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
        </Box>
    );
}

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


    // const handleCurrentCommodityChange = (event: any) => {
    //     const { name, value } = event.target;
    //     const updatedCommodity: ICommodity = {
    //         ...currentOpenCommodity, // spread the current object
    //         [name]: value, // update the field with the new value
    //     };
    //
    //     setCurrentOpenCommodity(updatedCommodity);
    // };


    return (
        <>
            <Typography variant="h3" align="center">Commodities</Typography>

            <Box display="flex" justifyContent="center">
                <List sx={{
                    width: '90%',
                    bgcolor: 'black',
                    justify: "center",
                    alignItems: "center",
                }}>
                    {/*{[1, 2, 3].map((value) => (*/}
                    {commodities.map(commodity => (
                        <ListItem
                            key={commodity.id}
                            disableGutters
                            sx={{border: "2px solid grey", borderRadius: 3, margin: "1%", padding: 0}}
                        >
                            <ListItemButton component="a" href="#simple-list" onClick={() => handleOpen(commodity)}>
                                {/*<ListItemText primary="Spam"/>*/}
                                <Grid container columnSpacing={1}>
                                    <Grid item xs={3}>
                                        {/*<Item>1</Item>*/}
                                        <Typography variant="subtitle1">{commodity.product_name}</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/*<Item>1</Item>*/}
                                        <Typography
                                            variant="subtitle1">{"expires at " + commodity.expiry_date}</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/*<Item>1</Item>*/}
                                        <Typography variant="subtitle1">{"weighing " + commodity.weight} kg</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/*<Item>1</Item>*/}
                                        <Button sx={{zIndex: 99}} onClick={(e) => {
                                            alert("eww brotha");
                                            e?.stopPropagation();
                                        }}>
                                            <DeleteIcon></DeleteIcon>
                                        </Button>
                                    </Grid>
                                </Grid>
                                {/*<Typography variant="subtitle1" sx={{textAlign: "right"}}>bbbbbbbb</Typography>*/}
                            </ListItemButton>
                            {/*<ListItemText primary={`Line item ${value}`} />*/}
                        </ListItem>
                    ))}
                </List>
                {/*<Button onClick={() => console.log(JSON.stringify(currentOpenCommodity))}>log</Button>*/}
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    borderRadius: 3,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {currentOpenCommodity?.product_name}
                    </Typography>
                    <Divider orientation="horizontal" sx={{marginBottom: "5%"}} />
                    <TextField id="outlined-basic" fullWidth label="weight"
                               defaultValue={currentOpenCommodity?.weight} InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}/>
                    <Button sx={{color: "grey"}}>Cancel</Button>
                    <Button>Save</Button>
                </Box>
            </Modal>

        </>
    );
};
