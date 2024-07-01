import React from 'react';
import './App.css';

import {BooksGallery} from "features/books-gallery/booksGallery";
import {Header} from "features/header/header";
import {BookPage} from "features/bookPage/bookPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <BooksGallery/>
            {/*<BookPage />*/}
        </div>
    );
}

export default App;
