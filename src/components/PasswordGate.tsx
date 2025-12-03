import React, { useState, useEffect } from 'react';
import '../styles/matrix-theme.css';

const PASSWORD = 'fightandflow';
const COOKIE_NAME = 'fight_flow_auth';
const COOKIE_EXPIRY_DAYS = 365;

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if cookie exists
    const cookies = document.cookie.split(';');
    const authCookie = cookies.find(cookie =>
      cookie.trim().startsWith(`${COOKIE_NAME}=`)
    );

    if (authCookie) {
      const value = authCookie.split('=')[1];
      if (value === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === PASSWORD) {
      // Set cookie for 1 year
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
      document.cookie = `${COOKIE_NAME}=true; expires=${expiryDate.toUTCString()}; path=/`;

      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--matrix-black)',
      color: 'var(--matrix-green)',
      padding: '20px'
    }}>
      <div className="matrix-card" style={{
        maxWidth: '400px',
        width: '100%',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '32px',
          marginBottom: '12px',
          textShadow: 'var(--matrix-glow)'
        }}>
          FIGHT & FLOW
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          marginBottom: '30px',
          fontSize: '14px'
        }}>
          Enter password to access
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="matrix-input"
            style={{
              marginBottom: '20px',
              textAlign: 'center'
            }}
            autoFocus
          />

          {error && (
            <p style={{
              color: 'var(--advanced-color)',
              fontSize: '14px',
              marginBottom: '20px'
            }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="matrix-button matrix-button-primary"
            style={{
              width: '100%',
              padding: '14px'
            }}
          >
            Enter
          </button>
        </form>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '12px',
          marginTop: '30px',
          fontStyle: 'italic'
        }}>
          Security theater mode: deliberately insecure 🟢
        </p>
      </div>
    </div>
  );
};

export default PasswordGate;
