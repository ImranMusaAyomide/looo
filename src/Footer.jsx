import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section with Image and CTA */}
      <div className="footer-top">
        <div className="footer-image-wrap">
           {/* Replace with your actual clock/desk image */}
          <img src="/path-to-your-clock-image.png" alt="Productivity Desk" />
        </div>
        
        <div className="footer-cta">
          <h2 className="cta-title">READY FOR A DAY THAT<br />FEELS LIGHTER?</h2>
          <button className="download-btn">
            <span className="apple-icon"></span> Download For mac
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="footer-bottom">
        <nav className="footer-links">
          <a href="#templates">Templates</a>
          <a href="#app">App</a>
          <a href="#blog">Blog</a>
          <a href="#terms">Terms of Service</a>
          <a href="#ios">Download For IOS</a>
        </nav>

        <div className="footer-logo">
          <span className="logo-text">LOOO</span>
        </div>

        <div className="footer-copyright">
          <span className="social-icons">𝕏 ◎</span>
          <p>2026 portrait all rise reserve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;