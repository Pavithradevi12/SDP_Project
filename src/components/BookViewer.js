// src/components/BookViewer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', image: 'images/book1.jpg', genre: 'Action', language: 'English', rating: 4, file: '/src/images/book1.pdf' },
  
];

const BookViewer = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
        <div style={{ height: '750px' }}>
          <Viewer fileUrl={book.file} />
        </div>
      </Worker>
    </div>
  );
};

export default BookViewer;
