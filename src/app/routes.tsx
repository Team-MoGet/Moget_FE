import GachaPage from "@/pages/GachaPage";
import BirthdayClaimPage from "@/pages/BirthdayClaimPage";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/gacha" element={<GachaPage />} />
      <Route path="/gacha/birthday-claim" element={<BirthdayClaimPage />} />
    </Routes>
  )
}
