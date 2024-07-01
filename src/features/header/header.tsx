import React from 'react';
import {Search} from "features/header/search";
import {Categories, SortAndFilter} from "features/header/settings/sortAndFilter";
import s from './header.module.css'
import {categoriesString} from "App";

export type HeaderProps = {
    category: categoriesString;
    categoryChangeHandler: (event: React.ChangeEvent<{}>, newValue: Categories | null) => void;
};

export const Header = ({category, categoryChangeHandler}: HeaderProps) => {
    return (
        <div className={s.header}>
            <h1>Search books</h1>
            <Search/>
            <SortAndFilter category={category} categoryChangeHandler={categoryChangeHandler}/>
        </div>
    );
};

