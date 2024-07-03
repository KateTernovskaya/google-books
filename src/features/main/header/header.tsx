import React from 'react';
import {Search} from "features/main/settings/search";
import {SortAndFilter} from "features/main/settings/sortAndFilter";
import s from 'features/main/main.module.css'
import {Autocomplete, TextField} from "@mui/material";

// export type HeaderProps = {
//     category: categoriesString;
//     categoryChangeHandler: (event: React.ChangeEvent<{}>, newValue: Categories | null) => void;
//     searchInput: any
//     searchChangeHandler: (e: any) => void
// };
export const Header = (props: any) => {

    return (
        <div className={s.header}>

            <h1>Search books</h1>
            <Search
                getBooks={props.getBooks}
                searchInput={props.searchInput}
                    searchChangeHandler={props.searchChangeHandler}
            />


            <SortAndFilter
                getBooks={props.getBooks}
                sortBy={props.sortBy}
                sortChangeHandler={props.sortChangeHandler}
                category={props.category}
                categoryChangeHandler={props.categoryChangeHandler}
            />
        </div>
    );
};

