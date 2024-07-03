import React, {ChangeEvent} from 'react';
import s from 'features/main/main.module.css'
import {categoriesString} from "App";
import {
    Autocomplete,
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";

const categories: Categories[] = [
    {label: 'all'},
    {label: 'art'},
    {label: 'biography'},
    {label: 'computers'},
    {label: 'history'},
    {label: 'medical'},
    {label: 'poetry'}
]


export type Categories = {
    label: categoriesString
}
// const sortArr =[{value: 1, title: 'relevance'}, {value: 1, title: 'newest'}]

export const SortAndFilter = (props: any) => {
    const defaultCategory = categories.find(option => option.label === props.category) || null;




    return (
        <div className={s.setting}>
            <Autocomplete
                defaultValue={defaultCategory}
                clearIcon={null}
                onChange={props.categoryChangeHandler}
                className={s.filter}
                disablePortal
                id="combo-box-demo"
                options={categories}
                renderInput={(params) => <TextField {...params} variant="standard" label="Categories"/>}
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
// return (
//     <div className={s.setting}>
//         <Filter options={categories} label="Categories" category={category} onChange={categoryChangeHandler} />
//         {/*<Filter options={sortingBy} label="Sorting by"/>*/}
//     </div>
// );
