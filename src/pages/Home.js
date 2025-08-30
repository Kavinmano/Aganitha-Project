import React, {useState} from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import './Home.css';    

const Home = () =>{
    const [query,setQuery] = useState('');
    const [books,setBooks] = useState([]);  

    const searchBooks = async (e) =>{
        e.preventDefault();
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        setBooks(res.data.items || []);
    };
    return(
        <div className="home-container">
      <h1>📚 Book Finder</h1>
      <form onSubmit={searchBooks}>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book.volumeInfo} id={book.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;