import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Library</h3>
          <ul>
            <li>Genres</li>
            <li>Languages</li>
            <li>Authors</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>Articles</li>
            <li>Author Interviews</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>Author Services</li>
            <li>About / Contact</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 NebulaReads LIC. All Rights Reserved.</p>
        <p>Terms - Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;
