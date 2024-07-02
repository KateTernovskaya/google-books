import axios from "axios";

export const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
    withCredentials: true,
    headers: {
        "API-KEY": "AIzaSyA0WriFxUzA8dGSrLoqmkWgscAhqBZKwb8",
    },
});
