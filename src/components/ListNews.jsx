import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import countTime from "../utils/countTime";
import Stack from "@mui/material/Stack";

const Img = styled("img")(({ theme }) => ({
  height: "auto",
  width: "20%",
  borderRadius: "8px",
}));

const ListNews = ({ news }) => {
  return (
    <Stack spacing={3}>
      {news.map((data) => (
        <Link
          key={data.id}
          to={"/content/" + data.id}
          style={{
            textDecoration: "none",
            display: "inline-block",
            marginTop: "20px",
            color: "black",
          }}
        >
          <Box
            sx={{ display: "flex", position: "relative", cursor: "pointer" }}
          >
            <Img src={data.fields.thumbnail} alt={data.webTitle} />
            <Stack
              spacing={2}
              sx={{
                ml: "20px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  mb: "10px",
                  mt: "10px",
                  flexGrow: "1",
                  fontFamily: "Playfair Display",
                }}
              >
                {data.webTitle}
              </Typography>
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    mr: "15px",
                  }}
                >
                  {data.webPublicationDate != null
                    ? countTime(data.webPublicationDate)
                    : ""}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {data.fields.publication}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default ListNews;
