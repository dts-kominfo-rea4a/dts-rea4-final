import React from 'react';
import Box from "@mui/material/Box";
import {Container, createTheme, Link, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    rootBox: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        }
    },
    footerNav: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(0),

        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 'auto',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
        }
    },
    footerLink: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(2),
        }
    },
}));

export default function Footer(props) {
    const classes = useStyles();

    const content = {
        'copy': '© 2022 DTS Pair 24 All rights reserved.',
        'link1': 'News',
        'link2': 'Opinion',
        'link3': 'Travel',
        'link4': 'More',
        ...props.content
    };

    return (
        <footer>
            <Container maxWidth="xl">
                <Box py={12} display="flex" flexWrap="nowrap" alignItems="center" className={classes.rootBox}>
                    <NewspaperIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/#"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        NEWS CENTER
                    </Typography>
                    <Box component="nav" className={classes.footerNav}>
                        <Link href="#" variant="body1" color="textPrimary"
                              className={classes.footerLink}>{content['link1']}</Link>
                        <Link href="#" variant="body1" color="textPrimary"
                              className={classes.footerLink}>{content['link2']}</Link>
                        <Link href="#" variant="body1" color="textPrimary"
                              className={classes.footerLink}>{content['link3']}</Link>
                        <Link href="#" variant="body1" color="textPrimary"
                              className={classes.footerLink}>{content['link4']}</Link>
                    </Box>
                    <Typography color="textSecondary" component="p" variant="caption"
                                gutterBottom={false}>{content['copy']}</Typography>
                </Box>
            </Container>
        </footer>
    );
}