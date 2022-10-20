import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from "../Components/TopNews";
import News from "../Components/News";

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={'xl'}>
                <TopNews />
                <News />
            </Container>
        </React.Fragment>
    );
}
