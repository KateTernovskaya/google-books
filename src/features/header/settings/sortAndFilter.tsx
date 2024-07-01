import React, {useState} from 'react';
import s from '../header.module.css'
import {Filter} from "features/header/settings/filter";
import {categoriesString} from "App";
import {HeaderProps} from "features/header/header";

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
    {label: '1'},
    {label: '2'},
    {label: '3'},
    {label: '4'},
    {label: '5'}
]


export type Categories = {
    label: categoriesString
}

export type  SortArr = {
    label: string
    id?: string
}
export const SortAndFilter = ({category, categoryChangeHandler}: HeaderProps) => {


    return (
        <div className={s.setting}>
            <Filter options={categories} label="Categories" category={category} onChange={categoryChangeHandler} />
            {/*<Filter options={sortingBy} label="Sorting by"/>*/}
        </div>
    );
};

