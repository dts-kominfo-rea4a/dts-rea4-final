import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, createStyles } from '@mui/material';
import { makeStyles } from 'tss-react/mui';


import gundala from "../assets/images/gundala.jpg"

export default function DetailMovie({ images, detail }) {

  // const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Card sx={{ maxWidth: 800 }} display="inline-block" >

          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image={images}
            />
            <div style={{ position: "absolute", color: "white", top: "25%", left: "30%", transform: "translateX(-50%)", maxWidth: '50%', maxHeight:'300px'}}>

              <Typography gutterBottom variant="h4" component="div">
                Title
              </Typography>

              <Typography gutterBottom variant="caption" component="div">
                {detail} 
              </Typography>
              {/* <Button sx={{ backgroundColor: 'white', color: 'black' }}  >Play</Button> */}
            </div>
          </div>

        </Card>
      </Grid>

    </Grid>

  );
}
