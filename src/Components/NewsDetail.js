import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';

import inshortNewsApiInstance from "../Apis/InshortNewsApiInstance";

const TopNews = () => {
    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await inshortNewsApiInstance.get(
                    "/top-headlines"
                )

            } catch (err) {
                console.log(err)
            }
        }

        fetchDataNews()
    }, []);

    return (
        <Box sx={{flexGrow: 1, mt: 3}}>

        </Box>
    );
}

export default TopNews