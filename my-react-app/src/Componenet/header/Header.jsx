import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <div className="logo-icon">🌿</div>
          <span className="logo-text">ReactStudio</span>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Action Button */}
        <button className="action-btn">Get Started</button>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;