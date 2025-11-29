import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/matrix-theme.css';

const Header: React.FC = () => {
  return (
    <header className="matrix-header">
      <nav className="matrix-nav">
        <div className="matrix-logo">
          <Link to="/">FIGHT & FLOW</Link>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
