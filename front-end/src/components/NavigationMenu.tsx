import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";
import { SvgIconProps } from '@mui/material/SvgIcon';
import { Verified } from '@mui/icons-material';

interface NavigationItem {
  title: string;
  icon: React.ReactElement<SvgIconProps>;
  path: string;
}

export const navigationMenu: NavigationItem[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home"
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    path: "/explore"
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications"
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    path: "/messages"
  },
  {
    title: "Lists",
    icon: <ListAltIcon />,
    path: "/lists"
  },
  {
    title: "Groups",
    icon: <GroupIcon />,
    path: "/groups"
  },
  {
    title: "Verified",
    icon: <Verified />,
    path: "/verified"
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile"
  },
  {
    title: "Pending",
    icon: <PendingIcon />,
    path: "/pending"
  }
];
