import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/matrix-theme.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        padding: '40px 20px'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          textShadow: '0 0 20px var(--matrix-green)'
        }}>
          FIGHT & FLOW
        </h1>
        <p style={{
          fontSize: '20px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 30px',
          lineHeight: '1.6'
        }}>
          Transform your practice with our comprehensive library of fight choreography,
          flow movement, and workout content.
        </p>
        <button
          className="matrix-button matrix-button-primary"
          onClick={() => navigate('/videos')}
          style={{ fontSize: '18px', padding: '16px 32px' }}
        >
          Explore Videos
        </button>
      </div>

      {/* Features Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        marginBottom: '60px'
      }}>
        <div className="matrix-card">
          <h3 style={{ marginBottom: '12px' }}>18+ Workout Videos</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Curated collection of high-quality fight choreography and flow movement videos
          </p>
        </div>

        <div className="matrix-card">
          <h3 style={{ marginBottom: '12px' }}>Smart Filtering</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Browse by category, difficulty level, and instructor to find your perfect workout
          </p>
        </div>

        <div className="matrix-card">
          <h3 style={{ marginBottom: '12px' }}>Full-Screen Playback</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Immersive video experience with high-quality streaming
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '32px'
        }}>
          Categories
        </h2>
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['Technique', 'Flow', 'Retreat', 'Mindfulness', 'Strength', 'Flexibility'].map(cat => (
            <div
              key={cat}
              className="matrix-card"
              style={{
                padding: '20px 30px',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onClick={() => navigate('/videos')}
            >
              <h4 style={{ margin: 0 }}>{cat}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Levels */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          marginBottom: '30px',
          fontSize: '32px'
        }}>
          For All Levels
        </h2>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div className="difficulty-badge difficulty-beginner" style={{
            padding: '12px 24px',
            fontSize: '16px'
          }}>
            Beginner
          </div>
          <div className="difficulty-badge difficulty-intermediate" style={{
            padding: '12px 24px',
            fontSize: '16px'
          }}>
            Intermediate
          </div>
          <div className="difficulty-badge difficulty-advanced" style={{
            padding: '12px 24px',
            fontSize: '16px'
          }}>
            Advanced
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
