import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";

export default function NewsCard(props) {
  const formatedTime = (time) => {
    return moment(time).fromNow();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.news.title}
        height="140"
        image={
          props.news.image ||
          "https://media.istockphoto.com/vectors/news-update-vector-breaking-news-concept-reportage-illustration-with-vector-id1189961786?k=20&m=1189961786&s=612x612&w=0&h=--VbroxpJ2UUYHRV0grpL50o-L7gWiQgtPDcJzOx-H8="
        }
      />
      <CardContent>
        <Typography variant="subtitle2" noWrap gutterBottom>
          {props.news.title}
        </Typography>
        <Typography variant="caption" display="block" noWrap gutterBottom>
          {props.news.author || "anonymous"}
        </Typography>
        <Typography variant="caption" display="block" noWrap gutterBottom>
          {formatedTime(props.news.published_at)}
        </Typography>
      </CardContent>
    </Card>
  );
}
