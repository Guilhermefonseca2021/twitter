import {
  BusinessCenter,
  CalendarMonth,
  KeyboardBackspace,
  LocationOn,
} from "@mui/icons-material";
import { Avatar, Box, Button, Tab, TabList, TabContext, TabelPanel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [tabValue, setTableValue] = useState('1');
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => {
    console.log("open profile model.");
  };
  const handleFollowUser = () => {
    console.log("following user.");
  };

  const handleChange = () => {

  };

  const isMyProfile = true;
  const isFollowing = true;
  const value = 1;

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-3 text-xl font-bold opacity-90 ml-5">
          Code with Guih
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[10rem] object-cover "
          src="https://media.licdn.com/dms/image/D4E16AQFYHULIwBjYjg/profile-displaybackgroundimage-shrink_350_1400/0/1709664823673?e=1727913600&v=beta&t=qaJ6LL8adkQPgCDZrfGNstd9Jkz0tCNJ32VUPVpUlao"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-center h-[5rem]">
          <Avatar
            // className="transform translate-y-24" to move the image more to high
            src="https://www.linkedin.com/in/guilherme-fonseca-dos-santos-a49594207/"
            alt="code with guih"
            sx={{ width: "6rem", height: "6rem", border: "4px solid white" }}
          />
          {isMyProfile ? (
            <Button
              onClick={handleOpenProfileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {isFollowing ? "Follow" : "Unfollow"}
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
                alt="title of the cape"
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
      <section>
        <TabContext value={tsbValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabelPanel value="1">Item One</TabelPanel>
          <TabelPanel value="2">Item Two</TabelPanel>
          <TabelPanel value="3">Item Three</TabelPanel>
        </TabContext>
      </section>
    </div>
  );
}
