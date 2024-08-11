import React, { useState, useEffect } from 'react';
import './Membership.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Payment from './Payment';
import Footer from './Footer';
import Navbar from './Navbar';

const memberships = [
  {
    title: "Basic",
    imageUrl: "https://cdn-icons-png.freepik.com/512/5490/5490548.png",
    features: [
      "Access to 100 eBooks",
      "Basic Customer Support",
      "Limited Download Options",
      "Ad-Supported",
    ],
    unavailable: [
      "Offline Reading",
      "Advanced Recommendations",
    ],
    buttonText: "Rs.149",
    buttonColor: "#fcae1e",
  },
  {
    title: "Standard",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRaKWn9XBvj8idOIvlC6uywAETb36kg3c39Stz-sQ2ocC2LM7GK9Y7VWYe6tzDC3R8Og&usqp=CAU",
    features: [
      "Access to 500 eBooks",
      "Priority Customer Support",
      "Unlimited Download Options",
      "Ad-Free Experience",
      "Offline Reading",
    ],
    unavailable: [
      "Advanced Recommendations",
      "Personalized Content",
    ],
    buttonText: "Rs.259",
    buttonColor: "#2a5bd7",
  },
  {
    title: "Premium",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5766/5766815.png",
    features: [
      "Access to All eBooks",
      "24/7 Customer Support",
      "Unlimited Download Options",
      "Ad-Free Experience",
      "Offline Reading",
      "Advanced Recommendations",
    ],
    unavailable: [],
    buttonText: "Rs.499",
    buttonColor: "#e6005c",
  },
];

const MembershipCard = ({ title, imageUrl, features, unavailable, buttonText, buttonColor, onShopNow }) => (
  <div className="card">
    <img src={imageUrl} alt={`${title} membership`} className="card-image" />
    <h3 className="card-title">{title}</h3>
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index} className="feature">
          <FaCheck className="icon" /> {feature}
        </li>
      ))}
      {unavailable.map((feature, index) => (
        <li key={index} className="feature unavailable">
          <FaTimes className="icon" /> {feature}
        </li>
      ))}
    </ul>
    <button className="shop-button" style={{ backgroundColor: buttonColor }} onClick={onShopNow}>
      {buttonText}
    </button>
  </div>
);

const Membership = () => {
  const [showPayment, setShowPayment] = useState(false);
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

  const handleShopNowClick = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

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
      <div className="membership-page">
        <h1 className="welcome-title">Welcome to Our Membership Page</h1>
        <div className="membership-container">
          {memberships.map((membership, index) => (
            <MembershipCard key={index} {...membership} onShopNow={handleShopNowClick} />
          ))}
          {showPayment && <Payment onClose={handleClosePayment} />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Membership;
