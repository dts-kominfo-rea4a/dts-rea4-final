import React from "react";
import { 
    Box, 
    Typography,
    Button,
    Grid
} from "@mui/material";

const Footer = () => {
    return (
        <Grid container spacing={2} sx={{color:'white', opacity:'50%', marginTop:'80px', marginBottom:'80px'}}>
            <Box sx={{display:'flex', flexDirection:'row', color:'white', width:'100%', p:1}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Audio and Subtitles</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Audio Description</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Help center</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Gift Cards</Typography>
                </Grid>
                <Grid item xs={2}></Grid>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', color:'white', width:'100%', p:1}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Media Center</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Investor Relations</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Jobs</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Terms of Use</Typography>
                </Grid>
                <Grid item xs={2}></Grid>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', color:'white', width:'100%', p:1}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Security</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Legal Provisions</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Cookie Preferences</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Corporate Information</Typography>
                </Grid>
                <Grid item xs={2}></Grid>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', color:'white', width:'100%', p:1}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">Contact Us</Typography>
                </Grid>
                <Grid item xs={8}></Grid>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', color:'white', width:'100%', p:1}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                <Button variant="outlined" sx={{color:'white', "&:hover":{borderColor:'white'}, borderColor:'white'}}>Service Code</Button>
                </Grid>
                <Grid item xs={8}></Grid>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', color:'white', width:'100%', p:1, marginTop:'10px'}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                <Typography variant="body2">© 2022 XCPlaySure, All Right Reserved</Typography>
                </Grid>
                <Grid item xs={7}></Grid>
            </Box>
        </Grid>
    )
};

export default Footer;
