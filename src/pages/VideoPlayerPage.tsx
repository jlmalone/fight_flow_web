import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Video, formatDuration } from '../types/Video';
import '../styles/matrix-theme.css';

const VideoPlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const video = location.state?.video as Video | undefined;

  if (!video) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Video not found</h2>
        <button
          className="matrix-button"
          onClick={() => navigate('/videos')}
          style={{ marginTop: '20px' }}
        >
          Back to Videos
        </button>
      </div>
    );
  }

  const getDifficultyClass = (difficulty: string) => {
    return `difficulty-badge difficulty-${difficulty.toLowerCase()}`;
  };

  return (
    <div className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
      {/* Back Button */}
      <button
        className="matrix-button"
        onClick={() => navigate('/videos')}
        style={{ marginBottom: '20px' }}
      >
        ← Back to Videos
      </button>

      {/* Video Player */}
      <div className="video-player-container">
        <video
          className="video-player"
          controls
          autoPlay
          src={video.videoURL}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Details */}
      <div style={{
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: '32px',
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>
          {video.title}
        </h1>

        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '20px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <span className={getDifficultyClass(video.difficulty)}>
            {video.difficulty}
          </span>
          <span style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            padding: '6px 12px',
            border: '1px solid var(--matrix-green)',
            borderRadius: '4px'
          }}>
            {video.category}
          </span>
          {video.instructor && (
            <span style={{
              fontSize: '14px',
              color: 'var(--text-secondary)'
            }}>
              Instructor: {video.instructor}
            </span>
          )}
          <span style={{
            fontSize: '14px',
            color: 'var(--text-secondary)'
          }}>
            Duration: {formatDuration(video.duration)}
          </span>
        </div>

        <div className="matrix-card">
          <h3 style={{ marginBottom: '12px' }}>Description</h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            {video.description}
          </p>
        </div>

        {video.tags.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '12px' }}>Tags</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {video.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: '12px',
                    color: 'var(--matrix-green)',
                    padding: '6px 12px',
                    border: '1px solid var(--matrix-green)',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {video.equipment && video.equipment.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '12px' }}>Equipment</h3>
            <ul style={{
              color: 'var(--text-secondary)',
              paddingLeft: '20px'
            }}>
              {video.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayerPage;
