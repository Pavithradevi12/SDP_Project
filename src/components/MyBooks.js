import React, { useContext, useState, useEffect } from 'react';
import { WishlistContext } from './WishlistContext';
import './MyBooks.css';
import Footer from './Footer';
import Navbar from './Navbar';

const MyBooks = () => {
  const { wishlist } = useContext(WishlistContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/login/me', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust according to your auth scheme
          }
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserName(data.userName);
        } else {
          setIsAuthenticated(false);
          setUserName('');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsAuthenticated(false);
        setUserName('');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Adjust according to your auth scheme
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        userName={userName}
        onLogout={handleLogout}
      />
      <div style={styles.container}>
        <div style={styles.readlists}>
          <div style={styles.readlist}>
            <img src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:820:460:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2F229D91C1FBFor_Stormy_Days_.jpg" alt="Soups & Bakes for Stormy Days" style={styles.image} />
            <button style={styles.button}>EXPLORE NOW</button>
          </div>
          <div style={styles.readlist}>
            <img src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:820:460:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2F2828EFC7F71by3_2.jpg" alt="Steamy Romances for Rainy Days" style={styles.image} />
            <button style={styles.button}>EXPLORE NOW</button>
          </div>
          <div style={styles.readlist}>
            <img src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:820:460:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2F1D7657DB58_On_A_Gloomy_Day.jpg" alt="Laugh Out Loud on a Gloomy Day" style={styles.image} />
            <button style={styles.button}>EXPLORE NOW</button>
          </div>
        </div>
        <div style={styles.wishlist}>
          <h2>My Wishlist</h2>
          <div style={styles.bookList}>
            {wishlist.map((book, index) => (
              <div key={index} style={styles.book}>
                <img src={book.image} alt={book.title} style={styles.bookImage} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    color: '#333',
  },
  readlists: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  readlist: {
    flex: '1',
    margin: '0 10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  wishlist: {
    marginTop: '40px',
  },
  bookList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  book: {
    flex: '1 0 21%', // Ensures 4 books per row with some margin
    margin: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  bookImage: {
    width: '80px', // Reduced width for smaller size
    height: 'auto',
    borderRadius: '10px',
  },
};

export default MyBooks;
