import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import countTime from "../utils/countTime";
import { Link } from "react-router-dom";

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
              // margin: "30px",
              display: "flex",
              flexDirection: "column",
              p: "20px",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <Link
              to={"/content/" + topNews.id}
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginTop: "10px",
                color: "black",
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
                  fontFamily: "Poppins",
                  color: "white",
                }}
              >
                {topNews.webTitle}
              </Typography>
            </Link>

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
        component="div"
        sx={{
          width: "400px",
          mb: "10px",
          mt: "10px",
          display: { xs: "none", lg: "block" },
          paddingX: "20px",
          color: "black",
          fontSize: "20px",
        }}
      >
        {String(topNews.fields.body)
          .replace(/<[^>]*>/g, "")
          .substring(0, 270) + "... "}
        <Link
          to={"/content/" + topNews.id}
          style={{
            textDecoration: "none",
            display: "inline-block",
            color: "#bd4ecc",
          }}
        >
          Read More
        </Link>
      </Typography>
    </Box>
  );
};

export default HotNews;
