import React from 'react';
import {IconButton, Paper, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import s from './header.module.css'


export const Search = () => {
    return (
        <div>
            <Paper className={s.search}
                   component="form"
            >
                <TextField fullWidth id="standard-basic" label="Search book" variant="standard"/>
                <IconButton type="button" aria-label="search">
                    <SearchIcon fontSize="large"/>
                </IconButton>
            </Paper>
        </div>
    );
};

