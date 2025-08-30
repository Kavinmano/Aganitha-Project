import React, {use, useEffect,useState} from "react";
import {useParams,Link} from 'react-router-dom'; 
import axios from "axios";   
import './BookDetail.css';

const BookDetail = () =>{
    const {id} = useParams();
    const [book,setBook] = useState(null);
    
    useEffect(() =>{
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => setBook(res.data.volumeInfo));
    },[id]);

    if(!book) return <p>Loading...</p>;

    return(
        <div className="book-detail">
            <Link to = "/" > Back to Home</Link>   
            <h2>{book.title}</h2>
            <p><strong>Authors:</strong> {book.authors?.join(', ')}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <img
            src={book.imageLinks?.thumbnail ||'https://via.placeholder.com/150'}
            alt ={book.title}
            />  
            <p>{book.description || "No description available."}</p>
        </div>
    );
};

    export default BookDetail;
