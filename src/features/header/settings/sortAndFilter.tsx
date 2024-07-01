import React from 'react';
import s from '../header.module.css'
import {Filter} from "features/header/settings/filter";

const categories: SortArr[] = [
    {label: '1'},
    {label: '2'},
    {label: '3'},
    {label: '4'},
    {label: '5'}
]

const sortingBy: SortArr[] = [
    {label: '1'},
    {label: '2'},
    {label: '3'},
    {label: '4'},
    {label: '5'}
]

export type  SortArr = {
    label: string
}
export const SortAndFilter = () => {
    return (
        <div className={s.setting}>
            <Filter options={categories} label="Categories"/>
            <Filter options={sortingBy} label="Sorting by"/>
        </div>
    );
};

