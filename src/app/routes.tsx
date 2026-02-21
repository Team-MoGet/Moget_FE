import GachaPage from "@/pages/GachaPage";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/gacha" element={<GachaPage />} />
    </Routes>
  )
}
