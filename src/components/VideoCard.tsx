import React from 'react';
import { Video, formatDuration } from '../types/Video';
import { useFavorites } from '../services/FavoritesManager';
import '../styles/matrix-theme.css';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(video.id);

  const getDifficultyClass = (difficulty: string) => {
    return `difficulty-badge difficulty-${difficulty.toLowerCase()}`;
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(video.id);
  };

  return (
    <div className="video-card" onClick={() => onClick(video)}>
      <div style={{ position: 'relative' }}>
        <img
          src={video.thumbnailURL}
          alt={video.title}
          className="video-thumbnail"
          onError={(e) => {
            // Fallback for broken images
            e.currentTarget.src = 'https://via.placeholder.com/400x200/000000/00cc66?text=Fight+Flow';
          }}
        />
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid var(--matrix-green)',
            color: isFav ? 'var(--matrix-green)' : 'var(--text-secondary)',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFav ? '★' : '☆'}
        </button>
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '18px',
          textTransform: 'uppercase',
          color: 'var(--matrix-green)'
        }}>
          {video.title}
        </h3>

        <p style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.4'
        }}>
          {video.description.length > 100
            ? `${video.description.substring(0, 100)}...`
            : video.description
          }
        </p>

        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          <span className={getDifficultyClass(video.difficulty)}>
            {video.difficulty}
          </span>
          <span style={{
            fontSize: '12px',
            color: 'var(--text-secondary)',
            padding: '4px 8px',
            border: '1px solid var(--matrix-green)',
            borderRadius: '4px'
          }}>
            {video.category}
          </span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'var(--text-secondary)'
        }}>
          {video.instructor && (
            <span>Instructor: {video.instructor}</span>
          )}
          <span>{formatDuration(video.duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
