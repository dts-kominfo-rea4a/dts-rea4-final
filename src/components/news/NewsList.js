import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";

export default function NewsList(props) {
  return (
    <Grid container spacing={2}>
      {props.data.map((news, index) => {
        return (
          <Grid key={index} item xs={4}>
            <NewsCard key={index} news={news} />
          </Grid>
        );
      })}
    </Grid>
  );
}
