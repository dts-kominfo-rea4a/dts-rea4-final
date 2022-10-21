import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';


// assets
import AuthBackground from '../assets/images/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthTheme = ({ children }) => (
    <Box sx={{ minHeight: '100vh'  }} paddingTop={-1}>
        <AuthBackground />
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            paddingTop={2}
        >
            <Grid item xs={12}>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                >
                    <Grid item>
                        <Box
                            display='flex'
                            flexDirection={"column"}
                            maxWidth={400}
                            margin="auto"
                            marginTop={1}
                            padding={5}
                            borderRadius={2}
                            boxShadow={'0px 0px 5px  #ccc'}
                            sx={{
                                ":hover": {
                                    boxShadow: "0px 0px 10px  #ccc"
                                }
                            }}
                        >
                            {children}
                        </Box>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
);

AuthTheme.propTypes = {
    children: PropTypes.node
};

export default AuthTheme;
