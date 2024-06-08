import {IRoute} from "../interfaces/routes";
import DeleteIcon from '@mui/icons-material/Delete';




export const routes: IRoute[] = [
    {
        name: "Home",
        icon: DeleteIcon,
        path: "/"
    },
    {
        name: "Vehicles",
        icon: DeleteIcon,
        path: "/commodities"
    },
    {
        name: "Locations",
        icon: DeleteIcon,
        path: "/locations"
    },
    {
        name: "Profile",
        icon: DeleteIcon,
        path: "/profile"
    },
];
