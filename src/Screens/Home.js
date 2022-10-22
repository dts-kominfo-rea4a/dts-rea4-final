import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from "../Components/TopNews";
import News from "../Components/News";
import SortSelect from "../Components/SortSelect";

export default function SimpleContainer({ category }) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={'xl'}>
                <TopNews category={category} />
                <SortSelect/>
                <News category={category} />
            </Container>
        </React.Fragment>
    );
}
