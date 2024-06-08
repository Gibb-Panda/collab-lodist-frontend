import {IRoute} from "../interfaces/routes";
import DeleteIcon from '@mui/icons-material/Delete';


/*
 * routes is used to achieve single point of change for
 * all routes in use. This is currently not in use
 * anymore, * but will in the future when developing this
 * web application further.
 */
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
