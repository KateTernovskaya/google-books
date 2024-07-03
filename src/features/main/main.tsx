import React, {ChangeEvent, useState} from "react";
import {categoriesString} from "App";
import {Categories} from "features/main/settings/sortAndFilter";
import axios from "axios";
import {Header} from "features/main/header/header";
import {BooksGallery} from "features/books-gallery/booksGallery";
import {BookPage} from "features/bookPage/bookPage";


const initState: any[] = []

export const Main = () => {
    const [category, setCategory] = useState<categoriesString>('all');
    const [books, setBooks] = useState<any[]>(initState)
    const [searchInput, setSearchInput] = useState('')
    // const [totalCount, setTotalCount] = useState('What book you want search?')
    const [totalCount, setTotalCount] = useState(0  )
    const [maxResult, setMaxResult] = useState(30 )

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

    const loadMore30 = () => {
        setMaxResult(maxResult + 30)
        getBooks()
    }

    const getBooks = () => {
        const baseUrl= 'https://www.googleapis.com/books/v1/volumes?q='
        const apiKey = 'AIzaSyA0WriFxUzA8dGSrLoqmkWgscAhqBZKwb8'
        const sortBy = 'relevance'

        axios.get(`${baseUrl}${searchInput}&maxResults=${maxResult}&orderBy=${sortBy}&key=${apiKey}`)
            .then(res=> {
                setBooks(res.data.items)
                setTotalCount(res.data.totalItems)
                console.log(res)

            })
            .catch(err=> console.log(err.response.data.error.message))
    }



    return (
        <>
            <Header
                 getBooks={getBooks}
                category={category}
                categoryChangeHandler={categoryChangeHandler}
                searchInput={searchInput}
                searchChangeHandler={searchChangeHandler}
            />
            {/*<BookPage/>*/}
            <BooksGallery
                category={category}
                books={books}
                searchInput={searchInput}
                totalCount={totalCount}
                loadMore30={loadMore30}
                />
        </>
    );
};

