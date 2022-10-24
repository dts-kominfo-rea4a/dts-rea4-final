import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import MovieList from "../components/MovieList";

const movies = [
  {
    title: "Black Adam",
    description:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    image: require("../assets/images/black-adam.jpg"),
  },
  {
    title: "Beast",
    description:
      "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
    image: require("../assets/images/beast.jpg"),
  },
];

const images = [
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
  require("../assets/images/beast.jpg"),
];

const posters = [
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
  require("../assets/images/poster-1.png"),
];

export default function HomePage() {
  return (
    <Container maxWidth="false">
      <Swiper navigation={true} modules={[SwiperNavigation]}>
        {movies.map((items, key) => {
          return (
            <SwiperSlide key={key}>
              <Box sx={{ background: "#040b16", height: "420px" }}>
                <Grid container>
                  <Grid item md={6} sx={{ padding: 6 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "30px",
                      }}
                    >
                      {items.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2,
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      {items.description}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Box
                      component="img"
                      src={items.image}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <MovieList images={images} section="Popular" />
      <MovieList images={images} section="Continue Watching" />
      <MovieList images={images} section="On the agenda" />
      <MovieList images={posters} section="Original" type="poster" />
    </Container>
  );
}
