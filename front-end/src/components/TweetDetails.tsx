import { KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import TweetCard from "./TweetCard";
import { Divider } from "@mui/material";

export default function TweetDetails() {
  const handleBack = () => {

  }

  return (
    <React.Fragment>
      <section className={"bg-white -50 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-3 text-xl font-bold opacity-90 ml-5">
          Tweet
        </h1>
      </section>
      <section>
        <TweetCard />
        <Divider />
      </section>
      <section>
        {[1, 1, 1, 1].map(() => <TweetCard />)}
      </section>
    </React.Fragment>
  )
}

