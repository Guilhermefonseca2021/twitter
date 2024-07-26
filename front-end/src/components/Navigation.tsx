import LogoTwitter from "../svgs/twitter-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { navigationMenu } from "./NavigationMenu";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { MoreHoriz } from "@mui/icons-material";

export default function Navigation() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout")
    handleClose()
  }
  
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            alt="Twitter SVG Vector Icon"
            width="30"
            decoding="async"
            src={LogoTwitter}
          />
        </div>
        <div className="space-y-4">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-4">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "5px",
              bgColor: "#1d9bf0",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex item-center space-x-1">
          <Avatar alt="username" src="" />
          <div>
            <span>Code with Guih❤️</span>
            <span className="opacity-70">@Guilhermefonseca2021</span>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHoriz />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
