import React from 'react';
import { socialMediaLinks } from '../constants/index';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-list">
        {socialMediaLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-media-link ${link.title.toLowerCase()}`}
          >
            <img src={link.icon} alt={`${link.title} icon`} className="social-media-icon" />
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;