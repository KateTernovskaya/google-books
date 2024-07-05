import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {Header} from "features/main/header/header";
import {BooksGallery} from "features/books-gallery/booksGallery";
import {categoriesString} from "features/main/settings/sortAndFilter";


const predefinedCategories: categoriesString[] = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

export const Main = () => {
    const [books, setBooks] = useState<any[]>([])
    const [searchInput, setSearchInput] = useState('')
    const [totalCount, setTotalCount] = useState(0)
    const [maxResult, setMaxResult] = useState(30)
    const [startIndex , setStartIndex ] = useState(0)
    const [sortBy, setSortBy] = useState('relevance')
    const [category, setCategory] = useState<categoriesString>('all');
    const [categories, setCategories] = useState<categoriesString[]>(predefinedCategories);

    const categoryChangeHandler = (event: ChangeEvent<{}>, newValue: any) => {
        if (newValue) {
            setCategory(newValue);
            console.log(newValue)
            console.log(category)
        }
    };

    const sortChangeHandler = async (event: any, newValue: any) => {
        if (newValue) {
            setSortBy(newValue);
        }
    };

    const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setSearchInput(e.target.value)
        }
    }

    useEffect(() => {
        if (searchInput) {
            getBooks();
        }
    }, [sortBy, category, startIndex]);

    const loadMore30 = () => {
        setStartIndex(prevIndex => prevIndex + maxResult);
        console.log('show more')
    }

    const extractCategories = (books: any[]): categoriesString[] => {
        const categoriesSet = new Set<categoriesString>();

        books.forEach(book => {
            if (book.volumeInfo.categories) {
                book.volumeInfo.categories.forEach((cat: string) => {
                    const lowerCaseCat = cat.toLowerCase() as categoriesString;
                    if (predefinedCategories.includes(lowerCaseCat)) {
                        categoriesSet.add(lowerCaseCat);
                    }
                });
            }
        });
        // predefinedCategories.forEach(cat => {
        //     if (!categoriesSet.has(cat)) {
        //         categoriesSet.add(cat);
        //     }
        // });

        console.log(categoriesSet)

        return ['all', ...Array.from(categoriesSet)] as categoriesString[];
    };

    const getBooks = () => {
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
        const apiKey = 'AIzaSyA0WriFxUzA8dGSrLoqmkWgscAhqBZKwb8';

        axios.get(`${baseUrl}${searchInput}&startIndex=${startIndex}&maxResults=${maxResult}&subject=${category}&orderBy=${sortBy}&key=${apiKey}`)
            .then(res => {
                const uniqueBooks = res.data.items.filter((book: any, index: number, self: any[]) =>
                        index === self.findIndex((t) => (
                            t.id === book.id
                        ))
                );
                setBooks(prevBooks => startIndex === 0 ? uniqueBooks : [...prevBooks, ...uniqueBooks]);
                setTotalCount(res.data.totalItems);

                const newCategories = extractCategories([...books, ...uniqueBooks]);
                console.log('Extracted Categories:', newCategories);
                setCategories(newCategories);

                console.log(res);
            })
            .catch(err => console.log(err.response.data.error.message));
    };


    return (
        <>
            <Header
                sortBy={sortBy}
                sortChangeHandler={sortChangeHandler}
                getBooks={getBooks}
                category={category}
                categoryChangeHandler={categoryChangeHandler}
                searchInput={searchInput}
                searchChangeHandler={searchChangeHandler}
                categories={categories} // Передаем категории в Header
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

