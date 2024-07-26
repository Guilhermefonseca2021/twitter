import { Brightness4, MoreHoriz, Search } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function RightPart() {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className="py-5 sticky top-0">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        ></input>
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <Search />
        </div>
        <Brightness4
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold">Subscribe to unlock new features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <div>
          <h1 className="font-bold text-xl py-1">What's happening</h1>
          <p className="font-bold">Philippines vs Switzerland</p>
        </div>
        {[1, 1, 1].map(() => (
          <div className="flex justify-between w-full">
            <div>
              <p>Entertainment - Trending</p>
              <p className="font-bold">#TheMarvels</p>
              <p>34.3k Tweets</p>
            </div>
            <MoreHoriz />
          </div>
        ))}
      </section>
    </div>
  );
}
