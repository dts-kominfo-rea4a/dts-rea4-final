import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ContentSkeleton = () => {
  const looping = ["1", "2", "3", "4", "5", "6"];

  return (
    <Box sx={{ flexgrow: 1 }}>
      <Grid
        container
        spacing={5}
        sx={{ mb: { xs: 0, md: 5 } }}
      >
        <Grid
          item
          xs={12}
          md={8}
        >
          <Skeleton
            variant="rectangular"
            height={400}
          />
        </Grid>
        <Grid
          item
          xs={0}
          md={4}
        >
          <Skeleton
            variant="rectangular"
            height={400}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
      >
        {looping.map((index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
          >
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                height={240}
              />
              <Skeleton
                variant="rounded"
                height={60}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentSkeleton;
