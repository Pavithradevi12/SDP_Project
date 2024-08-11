import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageFilter from './LanguageFilter';
import GenreFilter from './GenreFilter';
import AuthorFilter from './AuthorFilter';
import BookCard from './BookCard';
import Navbar from './Navbar';
import Footer from './Footer';
import './ExplorePage.css';

import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';
import book6 from '../images/book6.jpg';
import book7 from '../images/book7.jpg';
import book8 from '../images/book8.jpg';
import book9 from '../images/book9.jpg';
import adbook1 from '../images/adbook1.jpg';
import adbook2 from '../images/adbook2.jpg';
import adbook3 from '../images/adbook3.jpg';
import adbook4 from '../images/adbook4.jpg';
import adbook5 from '../images/adbook5.jpg';
import fbook from '../images/fbook.jpg';
import fbook2 from '../images/fbook2.jpg';
import fbook3 from '../images/fbook3.jpg';
import fbook4 from '../images/fbook4.jpg';
import fbook5 from '../images/fbook5.jpg';
import mbook1 from '../images/mbook1.jpg';
import mbook2 from '../images/mbook2.jpg';
import mbook3 from '../images/mbook3.jpg';
import rbook1 from '../images/rbook1.jpg';
import rbook2 from '../images/rbook2.jpg';
import rbook3 from '../images/rbook3.jpg';
import rbook4 from '../images/rbook4.jpg';
import sbbok3 from '../images/sbbok3.jpg';
import sbook1 from '../images/sbook1.jpg';
import sbook2 from '../images/sbook2.jpg';
import sbook4 from '../images/sbook4.jpg';

import pdf1 from '../pdfs/book1.pdf';
import pdf2 from '../pdfs/book2.pdf';

const languages = ['English', 'Tamil', 'Spanish', 'French', 'German', 'Chinese'];
const genres = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Romance', 'Mystery', 'Art', 'Biography', 'Classic', 'Business', 'Computer', 'Cooking', 'Drama', 'Fiction', 'Games', 'Ghost Stories', 'Health', 'History', 'Music', 'Poetry', 'Politics', 'Religion', 'Science', 'Short Story', 'Travel', 'War', 'Young Readers'];
const authors = ['Leena Clover', 'Jesse Storm', 'Elizabeth Pantley', 'Sean Kenndy', 'Rodney Noble', 'Ilan Bahar', 'Rider Haggard'];

const books = [
  { title: 'Sprinkles and Skeletons', author: 'Leena Clover', image: book1, genre: 'Romance', language: 'English', rating: 4, pdf: pdf1 },
  { title: 'Daniel Hudson', author: 'Jesse Storm', image: book2, genre: 'History', language: 'Spanish', rating: 3, pdf: pdf2 },
  { title: 'Vampires and Villains', author: 'Elizabeth Pantley', image: book3, genre: 'Fantasy', language: 'English', rating: 4 },
  { title: 'Ghost Squad', author: 'Sean Kenndy', image: book4, genre: 'Ghost Stories', language: 'Spanish', rating: 3 },
  { title: 'The Overthinking in Relationship', author: 'Rodney Noble', image: book5, genre: 'Romance', language: 'English', rating: 5 },
  { title: 'The Girl from San-Daniele', author: 'Ilan Bahar', image: book6, genre: 'Mystery', language: 'French', rating: 3 },
  { title: 'A Yellow God', author: 'Ride Haggard', image: book7, genre: 'Religion', language: 'Chinese', rating: 4 },
  { title: 'Future Policing', author: 'Jayanth Murali', image: book8, genre: 'Science', language: 'English', rating: 4 },
  { title: 'Moments that Matter', author: 'Vikrant', image: book9, genre: 'Poetry', language: 'English', rating: 4 },
  { title: 'The Girl from The Moon', author: 'Sabyasachi Dhala', image: fbook, genre: 'Fiction', language: 'German', rating: 5 },
  { title: 'The League of GentleWomen Witches', author: 'Holton', image: fbook2, genre: 'Fiction', language: 'Chinese', rating: 4 },
  { title: 'Annes House of Dream', author: 'Montgomery', image: fbook3, genre: 'Fantasy', language: 'Spanish', rating: 3 },
  { title: 'Last Chance Academy', author: 'Alex Lidell', image: fbook4, genre: 'Fantasy', language: 'French', rating: 3 },
  { title: 'Beauty and the Beast', author: 'Leena Clover', image: fbook5, genre: 'Fiction', language: 'Spanish', rating: 4 },
  { title: 'Ayesha The Return of She', author: 'Rider Haggard', image: adbook3, genre: 'Adventure', language: 'German', rating: 3 },
  { title: 'The House of a Thousand Candles', author: 'Jesse Storm', image: adbook4, genre: 'Adventure', language: 'Chinese', rating: 3 },
  { title: 'Swiss Family Robinson', author: 'Sean Kenndy', image: adbook5, genre: 'Adventure', language: 'Chinese', rating: 3 },
  { title: 'A Journey to the Entire Earth', author: 'Sean Kenndy', image: adbook1, genre: 'Adventure', language: 'French', rating: 3 },
  { title: 'Twenty Thousand Leagues under the Sea', author: 'Holtan', image: adbook2, genre: 'Adventure', language: 'Chinese', rating: 3 },
  { title: 'The After House', author: 'Mary Robert', image: mbook1, genre: 'Mystery', language: 'French', rating: 3 },
  { title: 'A Study in Scarlet', author: 'Conan Doyle', image: mbook2, genre: 'Mystery', language: 'German', rating: 3.9 },
  { title: 'Sherlock Holmes', author: 'Conan Doyle', image: mbook3, genre: 'Mystery', language: 'English', rating: 5 },
  { title: 'The Forty Rules of Love', author: 'Elif Shafak', image: rbook1, genre: 'Romance', language: 'English', rating: 5 },
  { title: 'The Temporary Roomie', author: 'Sarah Adams', image: rbook2, genre: 'Romance', language: 'Spanish', rating: 4 },
  { title: 'The Fault in our Star', author: 'John Green', image: rbook3, genre: 'Romance', language: 'Spanish', rating: 3 },
  { title: 'Last Page', author: 'Sanjay Kumar', image: rbook4, genre: 'Romance', language: 'English', rating: 3 },
  { title: 'Harry Potter', author: 'JK Rowling', image: sbbok3, genre: 'Science', language: 'English', rating: 4 },
  { title: 'Project Hail Mary', author: 'Andy Weir', image: sbook1, genre: 'Science', language: 'English', rating: 3 },
  { title: 'ரசவாதி ', author: 'Sanjay Kumar', image: sbook2, genre: 'Science', language: 'Tamil', rating: 5 },
  { title: 'Paradox', author: 'Arya Narryan', image: sbook4, genre: 'Science', language: 'English', rating: 5 },
];

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/login/me', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    setSearchQuery(query);
    console.log("Search Query:", query);
  }, [location]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Adjust according to your auth scheme
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const filteredBooks = books.filter((book) => {
    const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(book.genre);
    const languageMatch = selectedLanguage === '' || book.language === selectedLanguage;
    const authorMatch = selectedAuthor === '' || book.author === selectedAuthor;
    const searchMatch = searchQuery === '' || book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return genreMatch && languageMatch && authorMatch && searchMatch;
  });

  const renderBookDetails = (book) => (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Type: {book.genre}</p>
      {book.image && (
        <img src={book.image} alt={book.title} style={{ width: '300px', height: 'auto' }} />
      )}
    </div>
  );

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        userName={userName}
        onLogout={handleLogout}
      />
      <div className="explore-page">
        <aside className="filters">
          <GenreFilter genres={genres} selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
          <LanguageFilter languages={languages} selectedLanguage={selectedLanguage} setLanguage={setSelectedLanguage} />
          <AuthorFilter authors={authors} selectedAuthor={selectedAuthor} setAuthor={setSelectedAuthor} />
        </aside>
        <main className="search-results">
          {selectedBook ? (
            renderBookDetails(selectedBook)
          ) : (
            filteredBooks.map((book, index) => (
              <BookCard key={index} book={book} onClick={() => handleBookClick(book)} />
            ))
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorePage;
