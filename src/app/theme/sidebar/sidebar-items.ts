import { RouteInfo } from "@app/core";

export const ROUTES: RouteInfo[] = [
  {
    path: "/pages/dashboard",
    title: "Dashboard",
    icon: "bxs-dashboard",
    groupTitle: false,
    role: ["All"],
    submenu: []
  },
  {
    path: "/pages/job-board",
    title: "Job Board",
    icon: "bxs-briefcase",
    groupTitle: false,
    role: ["All"],
    submenu: [],
  },
  {
    path: "/pages/scheduler",
    title: "Schedule",
    icon: "bxs-calendar",
    groupTitle: false,
    role: ["All"],
    submenu: [],
  },
  {
    path: "/pages/messenger",
    title: "Messenger",
    icon: "bxs-message-detail",
    groupTitle: false,
    role: ["All"],
    submenu: [],
  },
];
