import * as React from 'react';
import BooksTable from '../components/BooksTable'
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

const TitleBooks = () => {
    const bookName = useRef(null);
    const [books, setData] = useState([])
  
    const searchBooks = async () => {
        let name = bookName.current.value;
        await axios
            .get(baseUrl, {params: {q: `intitle:${name}`}})
            .then(data => setData(data.data.items))
            .catch(err => {
                console.log(err);
                return null;
            });
        }

    return(
        <div className='container text-center' >
            <Breadcrumbs/>

        <div className='container-hederPage'>
            <h1 className="display-4">Find books by book name</h1>
        </div>
            <div className='d-flex'>
                <input ref={bookName} className='form-control me-2' type='text' placeholder="Book's name"/>
                <button className='btn btn-outline-success' onClick={searchBooks}>Search</button>
            </div>

            <div className='container-table'>
                <BooksTable foundBooks = {books}/>

            </div>
        </div>
    )

}

export default TitleBooks;