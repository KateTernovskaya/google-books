import {ChangeEvent, useState} from "react";
import {categoriesString} from "App";
import {Categories} from "features/main/settings/sortAndFilter";
import axios from "axios";
import {Header} from "features/main/header/header";
import {BooksGallery} from "features/books-gallery/booksGallery";


const initState: any[] = []

export const Main = () => {
    const [category, setCategory] = useState<categoriesString>('all');
    const [books, setBooks] = useState<any[]>(initState)
    const [searchInput, setSearchInput] = useState('')

    const categoryChangeHandler = (event: ChangeEvent<{}>, newValue: Categories | null) => {
        if (newValue) {
            setCategory(newValue.label);
        }
    };

    const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setSearchInput(e.target.value)
        }

    }

    const getBooks = async () => {
        const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyA0WriFxUzA8dGSrLoqmkWgscAhqBZKwb8`)
            setBooks(res.data.items)
            console.log(res.data.items)
    }



    return (
        <>
            <Header
                category={category}
                categoryChangeHandler={categoryChangeHandler}
                searchInput={searchInput}
                searchChangeHandler={searchChangeHandler}
            />
            <BooksGallery
                category={category}
                books={books}
                getBooks={getBooks}
                />
        </>
    );
};

