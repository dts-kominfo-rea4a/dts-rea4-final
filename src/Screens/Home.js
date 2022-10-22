import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from "../Components/TopNews";
import News from "../Components/News";
import NewsMenu from '../Components/NewsMenu';

export default function SimpleContainer({ category }) {
    return (
      <React.Fragment>
        <NewsMenu />
        <CssBaseline />
        <Container maxWidth={'xl'}>
          <TopNews category={category} />
          <News category={category} />
        </Container>
      </React.Fragment>
    );
}
