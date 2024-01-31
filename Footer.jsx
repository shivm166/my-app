// Footer.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#sell">Sell on OLX</a></li>
            <li><a href="#help">Help & Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>OLX Group</h3>
          <ul>
            <li><a href="#olxCorp">OLX Corp</a></li>
            <li><a href="#olxBlog">OLX Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 OLX Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
