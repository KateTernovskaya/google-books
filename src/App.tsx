import React, {useState} from 'react';
import './App.css';
import {BooksGallery} from "features/books-gallery/booksGallery";
import {Header} from "features/header/header";
import {Categories} from "features/header/settings/sortAndFilter";

export type categoriesString = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'



function App() {
    const [category, setCategory] = useState<categoriesString>('all');
    const CategoryChangeHandler = (event: React.ChangeEvent<{}>, newValue:  Categories | null) => {
        if (newValue) {
            setCategory(newValue.label);
        }
    };

    return (
        <div className="App">
            <Header category={category} categoryChangeHandler={CategoryChangeHandler} />
            <BooksGallery category={category} />
            {/*<BookPage />*/}
        </div>
    );
}

export default App;
