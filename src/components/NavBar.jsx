// import React from "react";
// import {
//     Box,
//     IconButton,
//     Typography,
// } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// const NavBar =()=>{
//     return(
//       <Box sx={{ flexGrow: 1, display:'flex'}}>
//       {/* <AppBar position="static"> */}
//         {/* <StyledToolbar> */}
//           <Box sx ={{flexGrow: 1, p: 2, display:'flex', justifyContent:'space-between'}}>
//             <Typography sx ={{display:'flex', marginLeft:'20px'}}>
//               <Box component="span" sx={{p: 1,backgroundColor:'black', borderRadius:'4px', display:'', color:'white',marginTop:'3px' }}>
//                 News
//                 </Box>
//                 <Box component="span" sx={{ p: 1, marginTop:'3px' }}>
//                 Portal
//                 </Box>
//             </Typography>
            
//             <Box sx ={{display:'flex', gap:'1em'}} >     
//               <IconButton size="large" aria-label="search" color="inherit">
//                 <SearchIcon />
//               </IconButton>

//               <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="open drawer"
//                 sx={{ mr: 2 }}
//               >
//                 <MenuIcon />
                
//               </IconButton>
//             </Box>
            
//           </Box>
//         {/* </StyledToolbar> */}
//       {/* </AppBar> */}
//     </Box>

//     );
    
// };

import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@mui/material';

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
                />
                <IconButton size="large" aria-label="search" color="inherit">
                  <SearchIcon /> 
                </IconButton>
              </Search>
                <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
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
        </DrawerHeader>
        <Divider />
        {/* <List> */}
        
                <Link to="/">
                  <Typography variant='body1'>testes</Typography>
                  </Link>
            
        {/* </List> */}
      </Drawer>
    </Box>
  );
}


export default NavBar;