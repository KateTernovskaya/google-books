import React from 'react';
import {Search} from "features/header/search";
import {SortAndFilter} from "features/header/settings/sortAndFilter";
import s from './header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <h1>Search books</h1>
            <Search/>
            <SortAndFilter/>
        </div>
    );
};

