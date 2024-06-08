import DeleteIcon from "@mui/icons-material/Delete";

export const icons = {
    DeleteIcon: DeleteIcon
}

// This interface represents a route of our web app
export interface IRoute {
    name: string;
    // icon: keyof typeof icons;
    icon: any;
    path: string;
}
