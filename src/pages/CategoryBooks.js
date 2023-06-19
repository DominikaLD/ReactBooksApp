import * as React from 'react';
import BooksTable from '../components/BooksTable'
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';


const baseUrl = 'https://www.googleapis.com/books/v1/volumes';


const CategoryBooks = () => {
    const categoryName = useRef(null);
    const [books, setData] = useState([])
  
    const searchBooks = async () => {
        let category = categoryName.current.value;
        await axios
            .get(baseUrl, {params: {q: `subject:${category}`}})
            .then(data => setData(data.data.items))
            .catch(err => {
                console.log(err);
                return null;
            });
        }


    return(
        <div className='container text-center'>
        <div className='container-hederPage'>
            <Breadcrumbs/>
            <h1 className="display-4">Find books by category </h1>
        </div>
            <div className='d-flex'>
            <select ref={categoryName} onChange={searchBooks} className="form-select" aria-label="Default select example">
            <option>Select category</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Reportage">Reportage</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Youth">Youth</option>
            </select>
            </div>

            <div className='container-table'>
                <BooksTable foundBooks = {books}/>

            </div>
        </div>
    )

}

export default CategoryBooks;