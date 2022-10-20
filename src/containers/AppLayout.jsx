import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";

const AppLayout = () => {
  return (
    <Box>
      <AppNavbar />
      <Outlet />
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
