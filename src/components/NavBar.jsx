import React, {useState} from "react";
import {
    Box,
    Grid,
    Avatar,
    AppBar,
    Container,
    Toolbar,
    Button,
    Tooltip,
    IconButton,
    Menu,
    MenuItem,
    Typography
} from "@mui/material";
import logo from "../assets/logo.png";
import LoginPicture from "../assets/LoginPicture.png";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../authentication/firebase";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useLocation } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

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
    marginRight:'25px'
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
          width: '30ch',
        },
      },
    },
}));

const settings = ['Logout'];

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const menuUserOnClick = async(event) => {
        if(event.currentTarget.innerHTML === 'Logout'){
            await logoutUser();
            navigate("/login");
            console.log("logout done");
        }
    }
    const logoOnClick = () => {
        navigate("/login");
    }
    const currentPage = (path) => {
        if(location.pathname === path){
            return "red";
        }else{
            return "white";
        }
    }
    const navBarButtonOnClick = (path) => {
        if(location.pathname === path){
            return;
        }else{
            navigate(path);
        }
    }

    return (
        <Grid item xs={12}>
            <AppBar position="static" sx={{bgcolor: '#141414', position: 'absolute', width: '100%', height: '94px', left:'0px', top: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '25px 30px', gap: '530px'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton onClick={logoOnClick}>
                            <Avatar variant="square" alt="logo" src={logo} sx={{width: '36px', height: '44px'}} />
                        </IconButton>
                        <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                            <Button onClick={() => navBarButtonOnClick("/")} sx={{my: 2, color: currentPage('/'), display: 'block'}}>home</Button>
                            <Button onClick={() => navBarButtonOnClick("/series")} sx={{my: 2, color: currentPage('/series'), display: 'block'}}>series</Button>
                            <Button onClick={() => navBarButtonOnClick("/movies")} sx={{my: 2, color: currentPage('/movies'), display: 'block'}}>movies</Button>
                            <Button onClick={() => navBarButtonOnClick("/newpopular")} sx={{my: 2, color: currentPage('/newpopular'), display: 'block'}}>new and popular</Button>
                            <Button onClick={() => navBarButtonOnClick("/watchlist")} sx={{my: 2, color: currentPage('/watchlist'), display: 'block'}}>my list</Button>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase sx={{marginTop:'10px'}}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Typography variant="h5" sx={{marginTop:'14px', marginRight:'15px'}}>{user ? user.email : ""}</Typography>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <CardGiftcardIcon fontSize="large" />
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <NotificationsSharpIcon fontSize="large" />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 0, marginLeft:'15px' }}>
                            <Tooltip title="Menu">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar variant="square" alt="profile-pic" src={LoginPicture} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px'}}
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
                                    {
                                        settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center" onClick={menuUserOnClick}>{setting}</Typography>
                                            </MenuItem>
                                        ))
                                    }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    )
}

export default NavBar;