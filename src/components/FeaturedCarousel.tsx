import React, { useState, useEffect } from 'react';
import { Video, formatDuration } from '../types/Video';
import { useNavigate } from 'react-router-dom';
import '../styles/matrix-theme.css';

interface FeaturedCarouselProps {
  videos: Video[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ videos }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredVideos = videos.filter(v => v.isFeatured).slice(0, 5);

  useEffect(() => {
    if (featuredVideos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredVideos.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [featuredVideos.length]);

  if (featuredVideos.length === 0) return null;

  const currentVideo = featuredVideos[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredVideos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);
  };

  const handleVideoClick = () => {
    navigate(`/video/${currentVideo.id}`, { state: { video: currentVideo } });
  };

  return (
    <div style={{
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto 60px',
      padding: '0 20px'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textShadow: 'var(--matrix-glow)'
      }}>
        Featured Videos
      </h2>

      <div style={{
        position: 'relative',
        border: '2px solid var(--matrix-green)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'var(--matrix-glow-strong)',
        cursor: 'pointer'
      }} onClick={handleVideoClick}>
        {/* Video Thumbnail */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 aspect ratio
          background: '#000'
        }}>
          <img
            src={currentVideo.thumbnailURL}
            alt={currentVideo.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/1200x675/000000/00cc66?text=Fight+Flow';
            }}
          />

          {/* Overlay gradient */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
          }} />

          {/* Video Info Overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '30px',
            color: 'var(--matrix-green)'
          }}>
            <h3 style={{
              fontSize: '32px',
              margin: '0 0 12px 0',
              textShadow: 'var(--matrix-glow-strong)'
            }}>
              {currentVideo.title}
            </h3>

            <p style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              margin: '0 0 16px 0',
              maxWidth: '800px'
            }}>
              {currentVideo.description}
            </p>

            <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <span className={`difficulty-badge difficulty-${currentVideo.difficulty.toLowerCase()}`}>
                {currentVideo.difficulty}
              </span>
              <span style={{
                fontSize: '14px',
                padding: '6px 12px',
                border: '1px solid var(--matrix-green)',
                borderRadius: '4px'
              }}>
                {currentVideo.category}
              </span>
              <span style={{
                fontSize: '14px',
                color: 'var(--text-secondary)'
              }}>
                {formatDuration(currentVideo.duration)}
              </span>
              {currentVideo.instructor && (
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)'
                }}>
                  Instructor: {currentVideo.instructor}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {featuredVideos.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 204, 102, 0.2)',
                border: '2px solid var(--matrix-green)',
                color: 'var(--matrix-green)',
                fontSize: '24px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--matrix-green)';
                e.currentTarget.style.color = 'var(--matrix-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 204, 102, 0.2)';
                e.currentTarget.style.color = 'var(--matrix-green)';
              }}
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 204, 102, 0.2)',
                border: '2px solid var(--matrix-green)',
                color: 'var(--matrix-green)',
                fontSize: '24px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--matrix-green)';
                e.currentTarget.style.color = 'var(--matrix-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 204, 102, 0.2)';
                e.currentTarget.style.color = 'var(--matrix-green)';
              }}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Carousel Indicators */}
      {featuredVideos.length > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px'
        }}>
          {featuredVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: '1px solid var(--matrix-green)',
                background: index === currentIndex ? 'var(--matrix-green)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedCarousel;
