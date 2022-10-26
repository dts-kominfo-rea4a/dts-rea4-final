import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import DetailPage from "../Components/DetailPage/DetailPage";
import LoginPage from "../Components/Containers/LoginPage";
import RegisterPage from "../Components/Containers/RegisterPage";
import PortalPage from "../Components/HomePage/PortalPage";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Portal" element={<PortalPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
