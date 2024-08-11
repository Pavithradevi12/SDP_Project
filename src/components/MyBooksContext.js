import React, { createContext, useState } from 'react';

const MyBooksContext = createContext();

export const MyBooksProvider = ({ children }) => {
  const [myBooks, setMyBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
  ]);

  return (
    <MyBooksContext.Provider value={{ myBooks, setMyBooks }}>
      {children}
    </MyBooksContext.Provider>
  );
};

export default MyBooksContext;
