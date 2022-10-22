import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function MovieList({ images, section, type }) {
  if (!type) {
    type = "image";
  }
  return (
    <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <Typography sx={{ color: "#E5E5E5", fontWeight: 500, fontSize: "26px" }}>
        {section}
      </Typography>
      <Swiper
        navigation={true}
        modules={[SwiperNavigation]}
        slidesPerView={5}
        spaceBetween={30}
      >
        {images.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <Box
                component="img"
                src={item}
                sx={{
                  width: "285px",
                  height: type == "image" ? "160px" : "575px",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
