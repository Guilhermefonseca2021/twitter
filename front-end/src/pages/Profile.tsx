import {
  BusinessCenter,
  CalendarMonth,
  KeyboardBackspace,
  LocationOn,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TweetCard from "../components/TweetCard";
import ProfileModel from "../components/ProfileModel";

export default function Profile() {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => {
    console.log("open profile model.");
  };
  const handleFollowUser = () => {
    console.log("following user.");
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);

    if (newValue === "4") {
      console.log("likes twits");
    } else if (newValue === "1") {
      console.log("user twits");
    }
  };

  const isMyProfile = true;
  const isFollowing = true;

  return (
    <div>
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95">
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-3 text-xl font-bold opacity-90 ml-5">
          Code with Guih
        </h1>
      </section>
      <section>
        <img
          className="w-full h-40 object-cover"
          src="https://media.licdn.com/dms/image/D4E16AQFYHULIwBjYjg/profile-displaybackgroundimage-shrink_350_1400/0/1709664823673?e=1727913600&v=beta&t=qaJ6LL8adkQPgCDZrfGNstd9Jkz0tCNJ32VUPVpUlao"
          alt="background"
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-center h-20">
          <Avatar
            src="https://www.linkedin.com/in/guilherme-fonseca-dos-santos-a49594207/"
            alt="code with guih"
            sx={{ width: "6rem", height: "6rem", border: "4px solid white" }}
          />
          {isMyProfile ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center mt-2">
            <h1 className="font-bold text-base">Code with Guih</h1>
            {isMyProfile && (
              <img
                className="ml-2 w-5 h-5"
                src="https://www.pngmart.com/files/12/Twitter-Verified-Badge-PNG-Transparent-Image.png"
                alt="verified"
              />
            )}
          </div>
          <h1 className="text-gray-500">@codewithguih</h1>
          <div className="mt-1 space-x-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              repellendus ullam
            </p>
            <div className="py-1 flex space-x-5">
              <div className="flex items-center text-gray-500">
                <BusinessCenter />
                <p className="ml-2">Education</p>
              </div>
              <div className="flex items-center text-gray-500">
                <LocationOn />
                <p className="ml-2">Location</p>
              </div>
              <div className="flex items-center text-gray-500">
                <CalendarMonth />
                <p className="ml-2">Birthday</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1 font-semibold">
                <span>590</span>
                <span className="text-gray-500">Followers</span>
              </div>
              <div className="flex items-center space-x-1 font-semibold">
                <span>190</span>
                <span className="text-gray-500">Following</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} aria-label="profile tabs">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1].map(() => <TweetCard />)}
            </TabPanel>
            <TabPanel value="2">

            </TabPanel>
            <TabPanel value="3">

            </TabPanel>
            <TabPanel value="4"></TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModel />
      </section>
    </div>
  );
}
