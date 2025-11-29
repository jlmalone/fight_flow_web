import React from 'react';
import '../styles/matrix-theme.css';

const AboutPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '42px',
          marginBottom: '40px',
          textShadow: '0 0 20px var(--matrix-green)'
        }}>
          About Fight & Flow
        </h1>

        <div className="matrix-card" style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '16px' }}>Our Mission</h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: '1.8',
            marginBottom: '16px'
          }}>
            Fight & Flow is dedicated to providing comprehensive fitness video content
            that combines the intensity of martial arts with the fluidity of flow movement.
            Our platform offers high-quality workout videos designed for practitioners of
            all levels.
          </p>
        </div>

        <div className="matrix-card" style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '16px' }}>What We Offer</h2>
          <ul style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: '1.8',
            paddingLeft: '20px'
          }}>
            <li>18+ professionally produced workout videos</li>
            <li>Multiple difficulty levels (Beginner, Intermediate, Advanced)</li>
            <li>Various categories including Technique, Flow, Retreat, and more</li>
            <li>High-definition video streaming</li>
            <li>Expert instruction from experienced practitioners</li>
            <li>Regular content updates</li>
          </ul>
        </div>

        <div className="matrix-card" style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '16px' }}>Categories</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {[
              { name: 'Technique', desc: 'Master fundamental movements' },
              { name: 'Flow', desc: 'Fluid, continuous practice' },
              { name: 'Retreat', desc: 'Deep, immersive sessions' },
              { name: 'Mindfulness', desc: 'Mind-body connection' },
              { name: 'Strength', desc: 'Build power and endurance' },
              { name: 'Flexibility', desc: 'Improve range of motion' }
            ].map(cat => (
              <div key={cat.name} style={{
                padding: '12px',
                border: '1px solid var(--matrix-green)',
                borderRadius: '4px'
              }}>
                <h4 style={{ marginBottom: '4px', fontSize: '14px' }}>
                  {cat.name}
                </h4>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '12px',
                  margin: 0
                }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="matrix-card">
          <h2 style={{ marginBottom: '16px' }}>Technology</h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            Built with modern web technologies including React, TypeScript, and Firebase,
            Fight & Flow Web delivers a seamless, responsive experience across all devices.
            Our Matrix-inspired design provides a unique, immersive interface that enhances
            your workout experience.
          </p>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '30px',
          border: '2px solid var(--matrix-green)',
          borderRadius: '8px',
          boxShadow: 'var(--matrix-glow)'
        }}>
          <h3 style={{ marginBottom: '12px' }}>Ready to Start?</h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            Explore our video library and begin your journey
          </p>
          <a href="/videos">
            <button className="matrix-button matrix-button-primary">
              Browse Videos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
