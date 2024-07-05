// import { Repeat } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useNavigate } from 'react-router-dom'

function TweetCard() {
    const navigate = useNavigate();

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
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
            <div className="flex cursor-pointer space-x-2">

            </div>
        </div>
      </div>
    </div>

  );
}

export default TweetCard;
