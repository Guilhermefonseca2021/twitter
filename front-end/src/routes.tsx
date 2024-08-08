import { Routes, Route } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import Profile from "./pages/Profile";
import TweetDetails from "./components/TweetDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/home" element={<HomeSection />} />
      <Route path="/profile/5" element={<Profile />}></Route>
      <Route path="/twit/:id" element={<TweetDetails />}></Route>
    </Routes>
  );
}
