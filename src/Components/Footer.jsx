import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">Subik Digital Design Agency</h2>
          <p className="text-lg mt-2">Innovate. Design. Create.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:subik.info@gmail.com" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <div className="mb-4">
          <p>&copy; 2024 Subik Digital Design Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
