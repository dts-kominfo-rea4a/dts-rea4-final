import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Berenang from '../assets/brng.png'

import { Link } from 'react-router-dom';

export default function HotNews() {
    return (
        <React.Fragment>
            <Container >
                <Box sx={{ flexGrow: 1 }}>
                    <h1>Hot Topics</h1>
                    <Grid container spacing={1.8}>
                        <Grid item xs={12} lg={8} sm={12}>
                            <div >
                                <img src={Berenang} style={{ borderRadius: "5px", width: "100%" }} />
                            </div>
                        </Grid>
                        <Grid item xs={0} lg={4} sm={0}>
                            <p>
                                Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
                                <nav>
                                    <Link to="/postingan">Read More</Link>
                                </nav>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>


    );
}








