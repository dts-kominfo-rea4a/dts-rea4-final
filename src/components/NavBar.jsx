import React from "react";
import {
    Box,
    Grid,
    Avatar,
    AppBar,
    Container,
    Toolbar,
    Button
} from "@mui/material";
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <Grid item xs={12}>
            <AppBar position="static" sx={{bgcolor: '#141414', position: 'absolute', width: '1505px', height: '94px', left:'0px', top: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '25px 30px', gap: '530px'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar variant="square" src={logo} sx={{width: '36px', height: '44px'}}/>
                        <Box sx={{paddingLeft: '60px', display:"flex", justifyContent:"space-between", gap:"0.5em"}}>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>home</Button>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>series</Button>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>movies</Button>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>new and popular</Button>
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>my list</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    )
}

export default NavBar;