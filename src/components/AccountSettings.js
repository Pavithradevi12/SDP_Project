import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [name, setName] = useState('Anthony Webb');
  const [email, setEmail] = useState('myemail@address.com');
  const [password, setPassword] = useState('********');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Saved');
  };

  const handleCancel = () => {
    // Handle cancel logic
    console.log('Cancelled');
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <form>
        <div className="ac-form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="ac-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <a href="#">Change</a>
        </div>
        <div className="ac-form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <a href="#">Change</a>
        </div>
        <div className="ac-form-group">
          <label htmlFor="profile-picture">Profile Picture</label>
          <button type="ac-button" className="upload-button">Upload a picture</button>
        </div>
        <div className="ac-form-actions">
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button type="button" className="save-button" onClick={handleSave}>Save</button>
        </div>
        <p className="delete-account">
          <a href="#">Delete Your Account</a>
        </p>
      </form>
    </div>
  );
};

export default AccountSettings;
