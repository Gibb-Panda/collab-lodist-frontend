import DeleteIcon from "@mui/icons-material/Delete";

export const icons = {
    DeleteIcon: DeleteIcon
}

export interface IRoute {
    name: string;
    // icon: keyof typeof icons;
    icon: any;
    path: string;
}
