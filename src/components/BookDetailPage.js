import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetails = ({ bookId }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/books/${bookId}');
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBook();
    }, [bookId]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            {book.image && (
                <img src={`data:image/jpeg;base64,${book.image}`} alt={book.title} style={{ width: '300px', height: 'auto' }} />
            )}
        </div>
    );
};

export default BookDetails;
