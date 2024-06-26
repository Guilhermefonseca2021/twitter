import { Grid } from "@mui/material";
import Navigation from "../components/Navigation";
import HomeSection from "../components/HomeSection";

function Home() {
  return (
    <Grid container className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="lg-block w-full relative">
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className="lg-block w-full relative ">
        <HomeSection />
      </Grid>
      <Grid item xs={0} lg={3} className="lg-block w-full relative">
        {" "}
        <p className="text-center"> right part </p>{" "}
      </Grid>
    </Grid>
  );
}

export default Home;
