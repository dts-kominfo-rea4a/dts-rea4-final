import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import NotFoundPage from "./pages/NotFound404";
import DashboardPage from "./pages/Dashboard";
import DetailPage from "./pages/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
