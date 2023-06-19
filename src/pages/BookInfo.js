import { useLoaderData } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs";


const BookInfo = () => {
    const book = useLoaderData();
    

    return (
        <div className='container text-center'>
        <div className="container-hederPage">
            <Breadcrumbs/>
            <h1 className="display-4">{book.volumeInfo.title}</h1>
            <h2 className="display-5">Author: {book.volumeInfo.authors[0]}</h2>
            <h3 className="display-7">Publisher: {book.volumeInfo.publisher}</h3>
            <a href={book.volumeInfo.previewLink} className="link-info">{book.volumeInfo.previewLink}</a>
        </div>
            
        </div>
    )
}

export default BookInfo