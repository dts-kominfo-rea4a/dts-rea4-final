import { Box,  } from "@mui/material";
import React from "react";
import HotTopic from "../components/HotTopic";
import LatestNews from "../components/LatestNews";

const Dashboard = ()=>{
    return(
    <Box sx={{ p:5, paddingTop:0}}>
        <HotTopic></HotTopic>
        <LatestNews></LatestNews>
    </Box>        
    );

};


export default Dashboard;