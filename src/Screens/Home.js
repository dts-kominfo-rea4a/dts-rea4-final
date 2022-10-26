import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from '../Components/TopNews';
import News from '../Components/News';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNews, getTopNews } from '../Features/newsSlice';
import { Backdrop, CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default function Home({ category }) {
  const { loading, topNews, news } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopNews());
    dispatch(getNews({ category }));
  }, [category]);

  return (
    <React.Fragment>
      <CssBaseline />
      {loading ? (
        <Loading />
      ) : (
        <Container maxWidth={'xl'}>
          <TopNews news={topNews} />
          <News news={news} category={category} />
        </Container>
      )}
    </React.Fragment>
  );
}
