import React from 'react';
import ReactDOM from 'react-dom/client'
import {  Link, Navigate, RouterProvider, createBrowserRouter, redirect  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './pages/Main';
import AuthorsBooks from './pages/AuthorsBooks';
import TitleBooks from './pages/TitleBooks';
import CategoryBooks from './pages/CategoryBooks';
import BookInfo from './pages/BookInfo';
import axios from 'axios';
import './style.css'

const baseUrl = 'https://www.googleapis.com/books/v1/volumes/';


const searchBooks = async (bookId) => {
    let book;
    await axios
        .get(baseUrl + `${bookId.bookId}`)
        .then(data => book = data.data)
        .catch(err => {
            console.log(err);
            return null;
        });
    return book;
}



const router = createBrowserRouter([
    {
        path: "/",
        element:  <Navigate to="/main" />
    },
    {
        path: "/main",
        element: <Main />
    },
    {
        path: "main/author",
        element: <AuthorsBooks />
    },
    {
        path: "main/title",
        element: <TitleBooks />
    },
    {
        path: "main/category",
        element: <CategoryBooks />
    },
    {
        path: "main/author/:bookId",
        element: <BookInfo />,
        loader: async ({ params }) => { return searchBooks(params) }
    },
    {
        path: "main/title/:bookId",
        element: <BookInfo />,
        loader: async ({ params }) => { return searchBooks(params) }
    },
    {
        path: "main/category/:bookId",
        element: <BookInfo />,
        loader: async ({ params }) => { return searchBooks(params) }
    }
  ]);



  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  