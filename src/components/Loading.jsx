import React from "react";
import ReactLoading from "react-loading";
import { Box } from "@mui/system";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <ReactLoading type="bars" color="#7e7e7e" />
    </Box>
  );
};

export default Loading;
