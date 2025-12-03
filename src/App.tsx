import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import FavoritesPage from './pages/FavoritesPage';
import AboutPage from './pages/AboutPage';
import './styles/matrix-theme.css';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        backgroundColor: 'var(--matrix-black)',
        color: 'var(--matrix-green)'
      }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/video/:id" element={<VideoPlayerPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{
          borderTop: '2px solid var(--matrix-green)',
          padding: '20px',
          textAlign: 'center',
          marginTop: '60px',
          color: 'var(--text-secondary)',
          fontSize: '14px'
        }}>
          <p style={{ margin: '0 0 8px 0' }}>
            Fight & Flow Web - Built with React, TypeScript & Firebase
          </p>
          <p style={{ margin: 0, fontSize: '12px' }}>
            © {new Date().getFullYear()} Fight and Flow. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
