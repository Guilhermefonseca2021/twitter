// import { Repeat } from "@mui/icons-material";
import {
  BarChart,
  Favorite,
  FavoriteOutlined,
  FileUpload,
  MoreHoriz,
  Repeat,
} from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatBubbleOutline } from "@mui/icons-material";

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

  const handleOpenReplyModel = () => {
    console.log("open model");
  };

  const handleCreateRetweet = () => {
    console.log("retweeted");
  };

  const handleLikeRetweet = () => {
    console.log("oui");
  };

  const liked = true;

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
              <span className="text-gray-600">@Guihfonse . 2m </span>
              <img
                className="ml-2 w-5 h-5"
                src="https://www.pngmart.com/files/12/Twitter-Verified-Badge-PNG-Transparent-Image.png"
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
          <div className="mt-2">
            
            <div onClick={() => navigate(`/twit/${3}`)} className="cursor-pointer">
              <p className="mb-2">
                twitter clone - Full Stack spring boot project and react.
              </p>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.wgtdJhPALeh0fQhpMFCkTAHaGB&pid=Api&P=0&h=180"
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3  flex items-center text-gray-600">
                <ChatBubbleOutline
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  liked ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <Repeat
                  className="cursor-pointer"
                  onClick={handleCreateRetweet}
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  liked ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {liked ? (
                  <Favorite
                    className="cursor-pointer"
                    onClick={handleLikeRetweet}
                  />
                ) : (
                  <FavoriteOutlined
                    className="cursor-pointer"
                    onClick={handleLikeRetweet}
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center">
                <BarChart className="cursor-pointer" onClick={handleOpenReplyModel} />
                <p>2.450</p>
              </div>    
              <div
                className="space-x-3 flex items-center"
              >
                  <FileUpload className="cursor-pointer" onClick={handleOpenReplyModel} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TweetCard;
