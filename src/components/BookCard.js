import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';
import { WishlistContext } from './WishlistContext';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [isWishlisted, setIsWishlisted] = useState(wishlist.some(item => item.title === book.title));
  const [showOptions, setShowOptions] = useState(false);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(book);
    } else {
      addToWishlist(book);
    }
    setIsWishlisted(!isWishlisted);
  };

  const handleDownload = (event) => {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = book.pdf;
    link.download = book.title;
    link.click();
  };

  const handleReadMore = (event) => {
    event.stopPropagation();
    window.open(book.pdf, '_blank');
  };

  return (
    <div
      className={`book-card-bc ${isWishlisted ? 'wishlisted' : ''}`}
      onClick={() => setShowOptions(!showOptions)}
    >
      <img src={book.image} alt={book.title} className="book-image-bc" />
      <h4 className="book-title-bc">{book.title}</h4>
      <p className="book-author-bc">{book.author}</p>
      <Rating rating={book.rating} />
      <button className="wishlist-button" onClick={(e) => { e.stopPropagation(); toggleWishlist(); }}>
        <FontAwesomeIcon icon={faHeart} className={`wishlist-icon ${isWishlisted ? 'active' : ''}`} />
      </button>
      {showOptions && (
        <div className="book-options">
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleReadMore}>Read Now</button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
