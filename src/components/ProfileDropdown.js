import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileDropdown.css'; // Styles for the dropdown

const ProfileDropdown = ({ userName, onLogout, onClose }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
    onClose();
  };

  return (
    <ul className="profile-dropdown">
      <li onClick={handleProfileClick}>Profile</li>
      <li onClick={handleLogout}>Logout</li>
    </ul>
  );
};

export default ProfileDropdown;
