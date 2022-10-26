import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



import { signOutFromEverywhere} from '../authentication/firebase';
import { useNavigate } from "react-router-dom";
import useThemeStore from '../stores/theme';
import {Link, TextField} from "@mui/material";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function NavbarUser() {

    const [user, loading] = useAuthState(auth);
      
    const navigate = useNavigate();
    const appTheme = useThemeStore();

    const btnSignOutOnClickHandler = async () => {
        await signOutFromEverywhere();
        navigate("/login")
    }

    const [anchorElMovies, setAnchorElMovies] = React.useState(null);
    const [anchorElSeries, setAnchorElSeries] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [keyword, setKeyword] = useState("");
    
    
    const inputSearchOnChangeHandler = (evt) => {
        setKeyword(evt.target.value);
        if (evt.keyCode === 13){
            console.log(keyword);
            formOnSubmitHandler();
        }
        console.log(keyword);
    };

    const inputSearchKeyPressHandler = (evt) => {
        
    }
    
    const formOnSubmitHandler = async (evt) => {
        evt.preventDefault();
        await navigate(`/search/${keyword}`)
    };


    const handleOpenMoviesMenu = (event) => {
        setAnchorElMovies(event.currentTarget);
    };

    const handleOpenSeriesMenu = (event) => {
        setAnchorElSeries(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseMoviesMenu = () => {
        setAnchorElMovies(null);
    };
    const handleCloseSeriesMenu = () => {
        setAnchorElSeries(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMyList = () => {
        if (user) {
            let users = user.displayName.split(',');
            if (users[1] !== undefined){
              console.log(users[1]);
              navigate(`/mylist/${users[1]}`);
            }
          }
    }

    const setDarkThemeHandler = () => {
        appTheme.setDarkMode();
    };

    const handleHome = () => {
        navigate('/');
    }

   

    return (
        <AppBar position="static" style={{ background: 'transparent'}}>
            
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
           
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMoviesMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
            
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
            LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleHome} >
                    Home
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpenMoviesMenu}>
                    Movies
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpenSeriesMenu}>
                    Series
                </Button>
                
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    News And Popular
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleMyList}>
                    My List
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setDarkThemeHandler()}>
                    {appTheme.darkMode ? ( <LightModeIcon/>) : ( <DarkModeIcon/>) }
                </Button>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar1"
                    anchorEl={anchorElMovies}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElMovies)}
                    onClose={handleCloseMoviesMenu}
                >
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/movies/popular" underline="none">Popular</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/movies/now_playing" underline="none">Now Playing</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/movies/upcoming" underline="none">Upcoming</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/movies/top_rated" underline="none">Top Rated</Link></Typography>
                    </MenuItem>
                </Menu>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar2"
                    anchorEl={anchorElSeries}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElSeries)}
                    onClose={handleCloseSeriesMenu}
                >
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/series/popular" underline="none">Popular</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/series/airing_today" underline="none">Airing Today</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/series/on_the_air" underline="none">On The Air</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center"><Link href="/series/top_rated" underline="none">Top Rated</Link></Typography>
                    </MenuItem>
                </Menu>
            </Box>
            <form onSubmit={formOnSubmitHandler}   >
            <TextField
            value={keyword}
            onChange={inputSearchOnChangeHandler}
            onKeyPress={inputSearchKeyPressHandler}
           placeholder="Search"
            sx={{
                borderColor:'white',
                marginRight: '1em',
            }}
            size="small"
            />
          </form>
          
            <Box sx={{ flexGrow: 0 }}>
                
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {loading }
                        <Avatar alt={user.displayName} src={user.photoURL} /> 
                    </IconButton>
                    
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem>
                        <Typography textAlign="center">Account</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={btnSignOutOnClickHandler}>Sign Out</Typography>
                    </MenuItem>
                </Menu>
            </Box>
            
        </Toolbar>
    </Container>
    </AppBar>
  );
}

export default NavbarUser;