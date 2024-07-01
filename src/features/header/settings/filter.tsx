import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import s from '../header.module.css'
import {categoriesString} from "App";
import {Categories} from "features/header/settings/sortAndFilter";

type Props = {
    options: Categories[]
    label: string
    category?: categoriesString
    onChange?: (event: React.ChangeEvent<{}>, newValue: Categories | null) => void
}

export const Filter = ({options, label, category,onChange}: Props) => {
    const defaultCategory = options.find(option => option.label === category) || null;

    return (
        <Autocomplete
            defaultValue={defaultCategory}
            onChange={onChange}
            className={s.filter}
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} variant="standard" label={label}/>}
        />
    )
};

