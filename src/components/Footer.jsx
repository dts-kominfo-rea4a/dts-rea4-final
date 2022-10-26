import React from "react";
import { Typography, Box, Grid, TextField, Button} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {

    return (
        <>
            <footer style={{ marginTop: '2em'}}>
                <Box sx={{ backgroundColor: '#5D5D5D', color: 'white'}}>
                    <Grid paddingLeft='16px' container justifyContent='center' spacing={2}>
                        <Grid item backgroundColor='black' sx={{ width: '25%'}}>
                            <Typography paddingLeft='16px'>Team: </Typography>
                            <ul>
                                <li>Akhmad Muntako</li>
                                <li>Ferdi Hasan</li>
                            </ul>
                        </Grid>
                        <Grid item backgroundColor='black' sx={{ width: '25%'}}>
                            <Typography marginButtom='32px'>Contact Us:</Typography>
                            <EmailIcon color="error" sx={{marginRight: '10px','&:hover': {cursor: 'pointer'}}}/>
                            <WhatsAppIcon color="error" sx={{marginRight: '10px','&:hover': {cursor: 'pointer'}}}/>
                            <InstagramIcon color="error" sx={{marginRight: '10px','&:hover': {cursor: 'pointer'}}}/>
                            <FacebookIcon color="error" sx={{marginRight: '10px','&:hover': {cursor: 'pointer'}}}/>
                            <TwitterIcon color="error" sx={{'&:hover': {cursor: 'pointer'}}}/>

                        </Grid>
                        <Grid item backgroundColor='black' sx={{ width: '50%'}}>
                            <Typography textAlign='center'>Subscibe our Website </Typography>
                            <Box textAlign='center' component='form' noValidate autoComplete="off" color='white'>
                            <TextField color="error" size="small" variant="outlined" label='Fill your email' sx={{backgroundColor: 'white', borderRadius: '3px', marginRight: 2}}/>
                            <Button variant="contained" color="error">Subscribe</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ height: '50px', backgroundColor: '#272727'}}>
                    <Typography sx={{ textAlign: 'center', color: 'white', margin: '0 auto', lineHeight: '50px'}}>
                        Copyright &copy; 2022 DTS4A-02-FINAL
                    </Typography>
                </Box>
            </footer>
        </>
    );
};