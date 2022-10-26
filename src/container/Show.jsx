import React, { useEffect }  from "react";
import { Box,
  Container,
  

} from "@mui/system";
import { Typography,
  Card,
  CardMedia,
  CardContent, } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import useContentStore from "../store/content";
import { Link } from "react-router-dom";

const Show = ()=>{
  const params = useParams();
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);
  // const movie = useContentStore(selectContent);
  const fetchContent = useContentStore(fetchContent);
  const baseUrlImage = "https://image.tmdb.org/t/p/original";

  useEffect(
    () => {
      console.log("ceksatudua");
      fetchContent(params.url);
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (!user) {
        navigate("/login");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate, fetchContent, params]
  );

    return(
        <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      >
        <Container maxWidth="xl" >
        <Typography variant='h2'>
            Hot Topic
            <Card sx={{ maxWidth: '100%', height:'350px', display:'flex' }}>
            {/* {hotState.hots?.map((hot,index,ind)=> (
            <>
            
                <Typography gutterBottom variant="h5" component="div" >
                {hot.title}
                </Typography>
            </>
                
                
            ))} */}
            

            <CardMedia
                component="img"
                // image={hotState.hots.multimedia[0].url}
                
                /> 
                <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {/* {hotState.hots.title} */}
                        {fetchContent.text}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {/* {hotState.hots.abstract} */}
                        </Typography>
                </CardContent>
            </Card>
            
        </Typography>
        </Container>
        
      </Box>
    )


}

export default Show;