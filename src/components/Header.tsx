import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../services/FavoritesManager';
import '../styles/matrix-theme.css';

const Header: React.FC = () => {
  const { count } = useFavorites();

  return (
    <header className="matrix-header">
      <nav className="matrix-nav">
        <div className="matrix-logo">
          <Link to="/">FIGHT & FLOW</Link>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/favorites" style={{ position: 'relative' }}>
            Favorites
            {count > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-12px',
                background: 'var(--matrix-green)',
                color: 'var(--matrix-black)',
                fontSize: '10px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                minWidth: '18px',
                textAlign: 'center'
              }}>
                {count}
              </span>
            )}
          </Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
