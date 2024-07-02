import React from 'react';
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

const sortingBy: SortArr[] = [
    {id: '1', label: 'rt'},
    {id: '2', label: '5t'},
    {id: '3', label: 'hyt'},
]


export type Categories = {
    label: categoriesString
}

export type  SortArr = {
    label: string
    id?: string
}


export const SortAndFilter = (props: any) => {
    const defaultCategory = categories.find(option => option.label === props.category) || null;
    const [sort, setSort] = React.useState('');

    const sortChangeHandler = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    }
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
            <Box className={s.filter}>
                <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-label">Sorting by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Sorting by"
                        onChange={sortChangeHandler}
                    >
                        {sortingBy.map(sort => {
                            return (
                                <MenuItem key={sort.id} value={sort.id}>{sort.label}</MenuItem>
                            )
                        })}

                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}
// return (
//     <div className={s.setting}>
//         <Filter options={categories} label="Categories" category={category} onChange={categoryChangeHandler} />
//         {/*<Filter options={sortingBy} label="Sorting by"/>*/}
//     </div>
// );
