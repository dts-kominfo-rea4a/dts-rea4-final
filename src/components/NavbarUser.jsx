import React from 'react';
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
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { styled, alpha } from '@mui/material/styles';

import { signOutFromEverywhere} from '../authentication/firebase';
import { useNavigate } from "react-router-dom";
import useThemeStore from '../stores/theme';


function NavbarUser() {

    const navigate = useNavigate();
    const appTheme = useThemeStore();
    const btnSignOutOnClickHandler = async () => {
        await signOutFromEverywhere();
        navigate("/login")
    }

    const [anchorElMovies, setAnchorElMovies] = React.useState(null);
    const [anchorElSeries, setAnchorElSeries] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    const setDarkThemeHandler = () => {
        appTheme.setDarkMode();
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

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
                <Button sx={{ my: 2, color: 'white', display: 'block' }} >
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
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
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
                        <Typography textAlign="center">Popular</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center">Now Playing</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center">Upcoming</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center">Top Rated</Typography>
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
                        <Typography textAlign="center">Popular</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center">Airing Today</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center">On TV</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography textAlign="center">Top Rated</Typography>
                    </MenuItem>
                </Menu>
            </Box>
            <Search sx={{
                marginRight: '1em'
            }}>
                
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <Box sx={{ flexGrow: 0 }}>
                
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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