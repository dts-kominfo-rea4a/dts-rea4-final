import React, { useEffect, useState } from "react";
import useMovieStore, {
  selectTvs,
  selectError,
  selectIsLoading,
  selectFetchTvsByCategory,
  selectTotalPages,
} from "../stores/movie";
import TvVertical from "../components/TvVertical";

import { Box, Grid, Tabs, Tab, Pagination, Stack } from "@mui/material";
// Import Link dan Outlet di sini
import { Link, Outlet, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SimpleBackdrop from "../components/SimpleBackdrop";

function TvsPage() {
  // select action
  const fetchTvs = useMovieStore(selectFetchTvsByCategory);
  const tvLoading = useMovieStore(selectIsLoading);
  const movieError = useMovieStore(selectError);
  const tvs = useMovieStore(selectTvs);
  const totalPage = useMovieStore(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const categoris = ["popular", "airing_today", "on_the_air", "top_rated"];
  const [value, setValue] = useState(0);
  useEffect(() => {
    setCurrentPage(1);
    fetchTvs(categoris[value], currentPage);
  }, [value]);
  useEffect(() => {
    fetchTvs(categoris[value], currentPage);
  }, [currentPage]);
  return (
    <>
      <NavBar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            aria-label="Category"
            variant="scrollable"
            scrollButtons="auto"
          >
            {categoris.map((data) => (
              <Tab
                label={data.replace("_", " ")}
                id={categoris.indexOf(data)}
                key={categoris.indexOf(data)}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
      {tvLoading ? (
        <SimpleBackdrop open={tvLoading} />
      ) : (
        <>
          <Box style={{ margin: 2 }}>
            <Stack
              spacing={2}
              style={{ margin: 5, right: 0, alignItems: "center" }}
            >
              <Pagination
                page={currentPage}
                onChange={(evt, value) => setCurrentPage(value)}
                count={totalPage}
                size="medium"
                color="primary"
              />
            </Stack>

            <Grid
              container
              rowSpacing={2}
              alignContent={"center"}
              margin={"auto"}
              top={2}
            >
              {tvs?tvs.map((tv) => (
                <Grid item key={tv.id}>
                  <Link component="div" to={`/tv/${tv.id}`}>
                    <TvVertical tv={tv}></TvVertical>
                  </Link>
                </Grid>
              )):""}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
export default TvsPage;
