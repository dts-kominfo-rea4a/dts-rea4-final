import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from "../Components/TopNews";
import News from "../Components/News";
import NewsMenu from '../Components/NewsMenu';


    return (
<<<<<<< HEAD
      <React.Fragment>
        <NewsMenu />
        <CssBaseline />
        <Container maxWidth={'xl'}>
          <TopNews category={category} />
          <News category={category} />
        </Container>
      </React.Fragment>
=======
        <React.Fragment>
            <CssBaseline/>
            {
                loading ? (<Loading/>) : (
                    <Container maxWidth={'xl'}>
                        <TopNews news={news} category={category} />
                        <SortSelect/>
                        <News news={news} category={category}/>
                    </Container>
                )
            }
        </React.Fragment>
>>>>>>> dicky-dev
    );
}
