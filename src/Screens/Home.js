import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from "../Components/TopNews";
import News from "../Components/News";

export default function SimpleContainer({ category }) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={'xl'}>
                <TopNews />
                <News category={category} />
            </Container>
        </React.Fragment>
    );
}
