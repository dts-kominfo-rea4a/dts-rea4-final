import * as React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch} from "react-redux";
import {getNews} from "../Features/newsSlice";

const SortSelect = ({category}) => {
    const [sortValue, setSortValue] = React.useState('');
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const sort = event.target.value
        setSortValue(event.target.value);

        dispatch(getNews({category, sort}))
    };

    return (
        <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <FormControl sx={{m: 1, minWidth: 120}} size="small">
                <InputLabel id="demo-select-small">Sort</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={sortValue}
                    label="Sort"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"relevancy"}>Relevancy</MenuItem>
                    <MenuItem value={"popularity"}>Popularity</MenuItem>
                    <MenuItem value={"publishedAt"}>Date</MenuItem>
                </Select>
            </FormControl>
        </Box>

    );
}

export default SortSelect