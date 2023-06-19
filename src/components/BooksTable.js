import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const BooksTable = (foundBooks) => {      
    const navigate = useNavigate();

    const viewMoreInfo = (booksInfo) => {
        navigate(booksInfo.id);
    }  

        if(foundBooks.foundBooks === undefined){
            return (<p>Author not found</p>)
        }

        if(foundBooks.foundBooks.length === 0){
            return null
        }

        return (<div className="App">
            <table className ="table table-bordered">
                <tbody >                
                    <tr>
                    <th scope="col">ID</th>  
                    <th scope="col">AUTHOR</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">Category</th>
                </tr>
                {foundBooks.foundBooks.map((val, key) => {
                    return (
                        <tr key={key} onClick={() => viewMoreInfo(val)}>
                            <td>{val.id}</td>
                            <td>{val.volumeInfo.authors[0]}</td>
                            <td>{val.volumeInfo.title}</td>
                            <td>{val.volumeInfo.categories}</td>
                        </tr>
                    )
                })}

                </tbody>

            </table>
        </div>
        )
}
 
export default BooksTable;