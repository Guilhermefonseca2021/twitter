// import { Repeat } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TweetCard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("deleted!");
    handleClose();
  };
  const handleEditTweet = () => {
    console.log("twet updated!");
    handleClose();
  };


  return (
    <div className="">
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
            <Repeat />
            <p> You Retweet </p>
        </div> */}
      <div className="flex space-x-5">
        <Avatar
          alt="username"
          src="https://avatars.githubusercontent.com/u/92196697?s=400&u=c8473d18c654efa12f36df9ccf3315dac1c1c5d9&v=4"
          className="cursor-pointer"
          onClick={() => navigate("/profile/${6}")}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer space-x-2">
              <span className="font-semibold">Code with Guih❤️</span>
              <span className="text-gray-600">@Guilhermefonseca2021 . 2m </span>
              <img
                className="ml-2 w-5 h-5"
                src="https://pixnio.com/free-images/2017/09/26/2017-09-26-09-42-06.jpg"
                alt="title of the cape"
              />
            </div>
            <div>
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
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
                </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
