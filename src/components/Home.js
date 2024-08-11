import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import Navbar from './Navbar';

import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';
import book6 from '../images/book6.jpg';

import genre1 from '../images/genre-1.webp';
import genre2 from '../images/genre-2.webp';
import genre3 from '../images/genre-3.webp';
import genre4 from '../images/genre-4.webp';
import genre5 from '../images/genre-5.webp';
import genre6 from '../images/genre-6.webp';
import genre7 from '../images/genre-7.webp';
import genre8 from '../images/genre-8.webp';
import genre9 from '../images/genre-9.webp';
import genre10 from '../images/genre-10.webp';
import genre11 from '../images/genre-11.webp';
import genre12 from '../images/genre-12.webp';

import CustomCarousel from '../components/CustomCarousel';

import pdf1 from '../pdfs/book1.pdf';
import pdf2 from '../pdfs/book2.pdf';
import pdf3 from '../pdfs/book1.pdf';
import pdf4 from '../pdfs/book2.pdf';
import pdf5 from '../pdfs/book1.pdf';
import pdf6 from '../pdfs/book2.pdf';

import educator1 from '../images/educator1.jpg';
import educator2 from '../images/educator2.jpg';
import educator3 from '../images/educator3.jpg';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGenreInfo, setSelectedGenreInfo] = useState('');

  const navigate = useNavigate();

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
          if (data.success) {
            setIsAuthenticated(true);
            setUserName(data.user.username); // Update based on your API response structure
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsAuthenticated(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  const books = [
    { id: 1, title: <b>'Sprinkles and Skeletons'</b>, author: <b>'Leena Clover'</b>, imgSrc: book1, pdfSrc: pdf1, isFree: false },
    { id: 2, title: <b>'Daniel Hudson'</b>, author: <b>'Jesse Storm'</b>, imgSrc: book2, pdfSrc: pdf2, isFree: true },
    { id: 3, title: <b>'Vampires and Villains'</b>, author: <b>'Dee Osah'</b>, imgSrc: book3, pdfSrc: pdf3, isFree: false },
    { id: 4, title: <b>'The Ghost Squad'</b>, author: <b>'Ashley Capes'</b>, imgSrc: book4, pdfSrc: pdf4, isFree: true },
    { id: 5, title: <b>'The OverThinking in Relationship'</b>, author: <b>'Traci Lovelot'</b>, imgSrc: book5, pdfSrc: pdf5, isFree: false },
    { id: 6, title: <b>'The Girl from San-Daniele'</b>, author: <b>'Elizabeth Pantley'</b>, imgSrc: book6, pdfSrc: pdf6, isFree: true },
  ];

  const genres = [
    { name: 'ROMANCE', imgSrc: genre1, info: 'Romantic tales full of love, passion, and relationships.' },
    { name: 'ACTION & ADVENTURE', imgSrc: genre2, info: 'Exciting adventures with daring heroes and thrilling action.' },
    { name: 'MYSTERY & THRILLER', imgSrc: genre3, info: 'Suspenseful stories filled with twists, turns, and mysteries.' },
    { name: 'BIOGRAPHIES & HISTORY', imgSrc: genre4, info: 'Inspiring biographies and fascinating historical events.' },
    { name: 'CHILDREN\'S', imgSrc: genre5, info: 'Fun and educational stories for young readers.' },
    { name: 'YOUNG ADULT', imgSrc: genre6, info: 'Stories that resonate with the younger generation.' },
    { name: 'FANTASY', imgSrc: genre7, info: 'Magical realms, mythical creatures, and epic quests.' },
    { name: 'HISTORICAL FICTION', imgSrc: genre8, info: 'Fiction set in the past with real historical events.' },
    { name: 'HORROR', imgSrc: genre9, info: 'Spine-chilling tales designed to scare and thrill.' },
    { name: 'LITERARY FICTION', imgSrc: genre10, info: 'Deep, thought-provoking stories about the human experience.' },
    { name: 'NON-FICTION', imgSrc: genre11, info: 'Informative and factual content covering various topics.' },
    { name: 'SCIENCE FICTION', imgSrc: genre12, info: 'Futuristic tales of technology, space, and the unknown.' }
  ];

  // Handle genre click to show info in a modal
  const handleGenreInfoClick = (genreInfo) => {
    setSelectedGenreInfo(genreInfo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGenreInfo('');
  };

  const youtubeEducators = [
    { name: 'Aditya Ranjan (Rankers Gurukul)', imgSrc: educator1 },
    { name: 'Satyam Gupta (MD Classes)', imgSrc: educator2 },
    { name: 'Abhinay Maths', imgSrc: educator3 },
  ];

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} userName={userName} onLogout={handleLogout} />
      <div className="home">
        <CustomCarousel />
        <section className="recommended">
          <h2>Recommended</h2>
          <Slider {...settings}>
            {books.map((book) => (
              <div className="book-card" key={book.id}>
                <a href={book.pdfSrc} target="_blank" rel="noopener noreferrer">
                  <img src={book.imgSrc} alt={book.title} />
                  <p className="book-title">{book.title}</p>
                  <p className="book-author">{book.author}</p>
                  <p className={`book-status ${book.isFree ? 'free' : 'premium'}`}>{book.isFree ? 'Free' : 'Premium'}</p>
                </a>
              </div>
            ))}
          </Slider>
        </section>
        <section className="categories">
          <h2>Browse Genres</h2>
          <div className="genre-cards">
            {genres.map((genre, index) => (
              <div className="genre-card" key={index} onClick={() => handleGenreInfoClick(genre.info)}>
                <img src={genre.imgSrc} alt={genre.name} />
                <div className="genre-name">{genre.name}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="youtube-educators">
          <h2>Book of YouTube Educators</h2>
          <div className="educator-cards">
            {youtubeEducators.map((educator, index) => (
              <div className="educator-card" key={index}>
                <img src={educator.imgSrc} alt={educator.name} />
                <p className="educator-name">{educator.name}</p>
                <button className="shop-now-button">EXPLORE NOW</button>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>

      {/* Modal for displaying genre information */}
      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <p>{selectedGenreInfo}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
