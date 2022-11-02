import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";

const AppLayout = () => {
  return (
    <>
      <AppNavbar />
      <Box
        sx={{
          margin: {
            xs: 5,
            sm: 5,
            md: 10,
            lg: 10,
            xl: 10,
          },
        }}
      >
        <Outlet />
      </Box>
      <AppFooter />
    </>
  );
};

export default AppLayout;
