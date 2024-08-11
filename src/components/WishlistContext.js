import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => [...prevWishlist, book]);
  };

  const removeFromWishlist = (book) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.title !== book.title));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
