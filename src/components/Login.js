import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/login/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('email', email); // Save email in localStorage
      console.log('Login response:', data); // Log the response to debug

      if (data.success) {
        // Redirect based on the role
        switch (data.role) {
          case 'admin':
            navigate('/admin'); // Redirect to admin dashboard
            break;
          case 'user':
            navigate('/home'); // Redirect to user dashboard
            break;
          default:
            navigate('/'); // Redirect to a default page if role is unknown
        }
      } else {
        setError('Invalid email or password.'); // Show a general error message
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-image">
          <img src="https://www.hamilton.edu/assets/mmlibrary/images/original/e-books1.jpg" alt="Login" />
        </div>
        <div className="login-content">
          <h1>Login Page</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email ID:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <button className="register-button" onClick={() => navigate('/register')}>Register here</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
