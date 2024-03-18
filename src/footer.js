import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="text-center p-3">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/privacy-policy" className="text-dark">Privacy Policy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/terms-of-service" className="text-dark">Terms of Service</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contact-us" className="text-dark">Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
