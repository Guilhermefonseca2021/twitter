import { Routes, Route } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import Profile from "./pages/Profile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeSection />}></Route>
      <Route path="/profile/5" element={<Profile />}></Route>
    </Routes>
  );
}
