import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import countTime from "../utils/countTime";

const HotNews = ({ topNews }) => {
  return (
    <Box
      sx={{
        height: "450px",
        position: "relative",
        display: "flex",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "relative",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${topNews.fields.thumbnail})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <Box
          sx={{
            background: `linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(225,225,225,0) 100%)`,
            height: "420px",
            width: "100%",
            position: "absolute",
            borderRadius: "10px",
            top: 0,
            left: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              margin: "30px",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                width: "400px",
                mb: "10px",
                mt: "10px",
                fontFamily: "Playfair Display",
                color: "white",
              }}
            >
              {topNews.webTitle}
            </Typography>
            <Box
              sx={{
                color: "white",
              }}
            >
              <Typography variant="caption" sx={{ mr: "15px" }}>
                {topNews.webPublicationDate != null
                  ? countTime(topNews.webPublicationDate)
                  : ""}
              </Typography>
              <Typography variant="caption">
                {topNews.fields.publication}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography
        gutterBottom
        variant="body1"
        component="div"
        sx={{
          width: "400px",
          mb: "10px",
          mt: "10px",
          display: { xs: "none", lg: "flex" },
          paddingX: "20px",
          fontSize: "22px",
          fontFamily: "Playfair Display",
          color: "black",
        }}
      >
        Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
        adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
        vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
        magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
        read more
      </Typography>
    </Box>
  );
};

export default HotNews;
