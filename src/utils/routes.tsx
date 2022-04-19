import { Dashboard } from "@mui/icons-material";
import React from "react";

export declare interface IMenu {
  key?: string;
  path: string;
  title: string;
  display?: boolean;
  icon: string | React.ReactNode;
  sub?: Array<IMenu>;
  comp?: React.ReactNode;
}

const menus: Array<IMenu> = [
  {
    path: "dashboard",
    title: "看板",
    icon: <Dashboard />,
    comp: "Dashboard",
  },
];

export { menus };
