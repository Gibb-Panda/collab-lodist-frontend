import DeleteIcon from "@mui/icons-material/Delete";
import {ElementType} from "react";
import {SvgIconProps} from "@mui/material";

export const icons = {
    DeleteIcon: DeleteIcon
}

export interface IRoute {
    name: string;
    // icon: keyof typeof icons;
    icon: any;
    path: string;
}
