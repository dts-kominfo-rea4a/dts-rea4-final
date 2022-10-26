import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useNewsStore,{
  iniNews,
  iniKeyword, 
  setKeyword,
  // fetchNews,
  setFilterNews,
  fetchNews,
} from '../store/news';
import { 
  Link,
  Box, 
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
 } from '@mui/material';
import { useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  auth,
  logOut,
} from "../auth/firebase";
import {useAuthState} from "react-firebase-hooks/auth"


const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight:'20px',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const NavBar=()=> {
  const navigate = useNavigate();
  // const news = useNewsStore(iniNews);
  const keyword = useNewsStore(iniKeyword);
  // const keywordSet = useNewsStore(setKeyword);
  // const filterNews = useNewsStore(setFilterNews);
  // const terapNews = useNewsStore(fetchNews);


  const buttonLogoutOnClickHandler = async () => {
    await logOut();
    navigate("/login");

  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  // console.log(query);
  const searchOnChangeHandler = (event) => {
    // newsState.fetchNews(query)
    // keywordSet(event.target.value)
    // if (event.target.value !==""){
    //   filterNews(event.target.value, news)
    // }
    // else{
    //   // newsState.fetchNews();
    //   terapNews();

    // }
  };
  

  // const newsState = useNewsStore();

    useEffect(()=>{
        // newsState.fetchNews()
    },[query]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const [user]=useAuthState(auth);

  return (
          
    <Box sx={{ display: 'flex', }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box sx ={{flexGrow: 1, p: 2, display:'flex', justifyContent:'space-between'}}>
             <Typography sx ={{display:'flex', marginLeft:'20px'}}>
             <Box component="span" sx={{p: 1,backgroundColor:'black', borderRadius:'4px', display:'', color:'white',marginTop:'3px' }}>
                 News
                 </Box>
                <Box component="span" sx={{ p: 1, marginTop:'3px' }}>
                Portal
                 </Box>
             </Typography>
            
             <Box sx ={{display:'flex', gap:'0.5em'}} >     
               
              <Search>
                <StyledInputBase sx={{marginTop:'5px'}}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={searchOnChangeHandler}
                />
                <IconButton size="large" aria-label="search" color="inherit">
                  <SearchIcon /> 
                </IconButton>
              </Search>
                <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              value={keyword}
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}
            >
            <MenuIcon />
          </IconButton>
             </Box>
             </Box>

          
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          {/* <Avatar></Avatar> */}
          {/* {user ? (
          <Typography> yesasa </Typography>): ""} */}
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  disablePadding>
            {/* <Link to="/register"> */}
              <ListItemButton >
                {/* <ListItemIcon>
                  
                </ListItemIcon> */}
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              
            {/* </Link> */}

            </ListItem>
            <ListItemButton onClick={buttonLogoutOnClickHandler}>
                {/* <ListItemIcon>
                  
                </ListItemIcon> */}
                <ListItemText primary="Logout" />
              </ListItemButton>
                
                  
            
        </List>

      </Drawer>
    </Box>
  );
}


export default NavBar;