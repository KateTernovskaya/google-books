import axios from "axios";
import { categoriesString, sortByString } from "state/types";

export const baseUrl = "https://www.googleapis.com/books/v1/volumes";
export const apiKey = "AIzaSyA0WriFxUzA8dGSrLoqmkWgscAhqBZKwb8";

export const BooksApi = {
  getBooks(searchInput: string, startIndex: number, sortBy: sortByString, category: categoriesString) {
    const query = `?q=${searchInput}`;
    const page = `&startIndex=${startIndex}`;
    const maxResults = `&maxResults=${30}`;
    const orderBy = `&orderBy=${sortBy}`;
    const key = `&key=${apiKey}`;
    const categoryFilter = category !== "All" ? `+subject:${category}` : "";

    return axios.get(`${baseUrl}${query}${categoryFilter}${page}${maxResults}${orderBy}${key}`);
  },
  getDetailBook(id: string | undefined) {
    return axios.get(`${baseUrl}/${id}?key=${apiKey}`);
  },
};
