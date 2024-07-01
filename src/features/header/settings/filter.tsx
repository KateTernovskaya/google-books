import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {SortArr} from "features/header/settings/sortAndFilter";
import s from '../header.module.css'

type Props = {
    options: SortArr[]
    label: string
}

export const Filter = ({options, label}: Props) => {
    return (
        <Autocomplete
            className={s.filter}
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => <TextField {...params} variant="standard" label={label}/>}
        />
    )
};

