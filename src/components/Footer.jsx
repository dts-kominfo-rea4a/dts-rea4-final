import React from "react";
import { 
    Box, 
    Typography,
    Button
    // Grid
} from "@mui/material";

const Footer = () => {
    return (
        // <Grid container spacing={2} sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        //     <Grid item xs={3}>
        //         <Typography variant="subtitle1">Audio and Subtitles</Typography>
        //     </Grid>
        //     <Grid item xs={3}>
        //         <Typography variant="subtitle1">Audio Description</Typography>
        //     </Grid>
        //     <Grid item xs={3}>
        //         <Typography variant="subtitle1">Help center</Typography>
        //     </Grid>
        //     <Grid item xs={3}>
        //         <Typography variant="subtitle1">Gift Cards</Typography>
        //     </Grid>
        // </Grid>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'.5em', p:2}}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Typography variant="body2">Audio and Subtitles</Typography>
                <Typography variant="body2">Audio Description</Typography>
                <Typography variant="body2">Help center</Typography>
                <Typography variant="body2">Gift Cards</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Typography variant="body2">Media Center</Typography>
                <Typography variant="body2">Investor Relations</Typography>
                <Typography variant="body2">Jobs</Typography>
                <Typography variant="body2">Terms of Use</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Typography variant="body2">Security</Typography>
                <Typography variant="body2">Legal Provisions</Typography>
                <Typography variant="body2">Cookie Preferences</Typography>
                <Typography variant="body2">Corporate Information</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Typography variant="body2">Contact Us</Typography>
            </Box>
            <Button variant="outlined" sx={{bgcolor:'grey'}}>Service Code</Button>
            <Typography variant="body2">© 2022 Movies, All Right Reserved</Typography>
        </Box>
    )
};

export default Footer;