// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import libraryLogo from '../images/logo.png';
import profileLogo from '../images/icon1.jpg';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({ isAuthenticated, userName, onLogout }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/explore?query=${searchQuery}`);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo-container">
          <Link to="/home">
            <img src={libraryLogo} alt="Library Logo" className="logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/mybooks">MyBooks</Link></li>
          </ul>
        </nav>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button-n">Search</button>
        </form>
        <div className="profile-container" onClick={handleProfileClick}>
          <img src={profileLogo} alt="Profile Logo" className="profile-logo" />
          {isAuthenticated && <span className="username">{userName}</span>}
          {isDropdownOpen && (
            <ProfileDropdown
              onLogout={onLogout}
              onClose={handleCloseDropdown}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
