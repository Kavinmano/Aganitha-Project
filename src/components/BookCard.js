import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, id }) => {
  return (
    <Link to={`/book/${id}`} className="book-card">
      <img
        src={book.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>{book.authors?.join(', ')}</p>
    </Link>
  );
};

export default BookCard;