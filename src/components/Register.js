import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from './Footer';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const user = { username, email, password, role:"user" };

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Registration successful
        navigate('/login');
      } else {
        // Handle errors here
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-image">
          <img src="https://www.hamilton.edu/assets/mmlibrary/images/original/e-books1.jpg" alt="Register" />
        </div>
        <div className="login-content">
          <h1>Register Here!</h1>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Create Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <div className="login-links">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
