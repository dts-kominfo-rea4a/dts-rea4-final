import { useState } from "react";
import { Grid, Box, Typography, Divider, Button, Rating } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ModalVideo from "./ModalVideo";

const Tv = ({ tv, videos }) => {
  const base_url = "https://image.tmdb.org/t/p/w1280/";
  const [modalOpen, setModalOpen] = useState(false);
  const videoCloseHandler = () => {
    setModalOpen(false);
  };
  return (
    <>
      {tv ? (
        <>
          <Box
            style={{
              backgroundImage: `url(${
                base_url +
                (tv.backdrop_path ? tv.backdrop_path : tv.poster_path)
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "92vh",
              display: "flex",
              direction: "row",
            }}
          >
            <Box
              container
              sx={{
                bottom: 0,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.6)",
                textAlign: "bottom",
                position: "absolute",
                lineHeight: "26pt"
              }}
            >
              <Box
                item
                xs={12}
                md={12}
                style={{ padding: 10, margin: "20px" }}
              >
                
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    color: "white",
                    alignItems:"center",
                    padding:5
                    
                  }}
                >
                  <Typography variant="h5">{tv.name}</Typography>
                  <Rating
                    value={tv.vote_average / 2}
                    precision={0.1}
                    readOnly
                    size="small"
                    color="white"
                  />
                  <Typography
                    variant="body2"
                    color="white"
                    alignItems={"center"}
                  >
                    {tv.vote_average}
                  </Typography>
                </div>
                {videos.length > 0 ? (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => setModalOpen(true)}
                    startIcon={<PlayCircleOutlineIcon />}
                  >
                    Play
                  </Button>
                ) : (
                  ""
                )}
                <Divider />
                <Typography variant="subtitle">Overview</Typography>
                <Typography variant="body1">{tv.overview}</Typography>
              </Box>
            </Box>
          </Box>
          {videos.length > 0 ? (
            <ModalVideo
              isOpen={modalOpen}
              label={videos[0].name}
              videoKey={videos[0].key}
              closeHandler={() => videoCloseHandler}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Tv;
