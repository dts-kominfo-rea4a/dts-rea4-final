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
import Logo from '../images/logo.png';


import { signOutFromEverywhere} from '../authentication/firebase';
import { useNavigate } from "react-router-dom";
import useThemeStore from '../stores/theme';
import { TextField} from "@mui/material";

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

    const handleMoviePopular = () => {
        navigate('/movies/popular');
    }

    const handleMovieNowPlaying = () => {
        navigate('/movies/popular');
    }

    const handleMovieUpcoming = () => {
        navigate('/movies/upcoming');
    }

    const handleMovieTopRated = () => {
        navigate('/movies/top_rated');
    }

    const handleSeriesPopular = () => {
        navigate('/series/popular');
    }

    const handleSeriesAiringToday = () => {
        navigate('/series/airing_today');
    }

    const handleSeriesOnTheAir = () => {
        navigate('/series/on_the_air');
    }

    const handleSeriesTopRated = () => {
        navigate('/series/top_rated');
    }

    const handleDiscover = () => {
        navigate('/discover');
    }

    return (
        <AppBar position="static" style={{ background: 'transparent'}}>
            
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <img src={Logo} width="50px" alt="LOGO"/>
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
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleDiscover}>
                    Discover
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
                        <Typography textAlign="center" onClick={handleMoviePopular}>Popular</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={handleMovieNowPlaying}>Now Playing</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={handleMovieUpcoming}>Upcoming</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={handleMovieTopRated}>Top Rated</Typography>
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
                        <Typography textAlign="center" onClick={handleSeriesPopular}>Popular</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={handleSeriesAiringToday}>Airing Today</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={handleSeriesOnTheAir}>On The Air</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center" onClick={handleSeriesTopRated}>Top Rated</Typography>
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