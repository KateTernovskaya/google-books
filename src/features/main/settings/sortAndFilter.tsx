import React from 'react';
import s from 'features/main/main.module.css'
import {Autocomplete, TextField} from "@mui/material";

export type categoriesString = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'


export const SortAndFilter = (props: any) => {
    //const defaultCategory = categories.find(option => option.label === props.category) || null;


    return (
        <div className={s.setting}>
            <Autocomplete
                value={props.category}
                onChange={props.categoryChangeHandler}
                className={s.filter}
                disablePortal
                id="combo-box-demo"
                options={props.categories}
                clearIcon={null}
                renderInput={(params) => <TextField {...params} variant="standard" label="Categories" />}
            />

            <Autocomplete
                defaultValue={props.sortBy}
                value={props.sortBy}
                clearIcon={null}
                onChange={props.sortChangeHandler}
                className={s.filter}
                disablePortal
                id="combo-box-demo"
                options={['relevance', 'newest']}
                renderInput={(params) => <TextField {...params} variant="standard" label="Categories"/>}
            />
        </div>
    )
}

