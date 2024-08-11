
import React, { useContext } from 'react';
import { MyBooksContext } from '../components/MyBooksContext';
import BookCard from '../components/BookCard';
import './MyBooksPage.css';

const MyBooksPage = () => {
  const { myBooks } = useContext(MyBooksContext);

  return (
    <div className="my-books-page">
      <h2>My Books</h2>
      <div className="my-books-list">
        {myBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyBooksPage;
