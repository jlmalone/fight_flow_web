import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video } from '../types/Video';
import { useFavorites } from '../services/FavoritesManager';
import VideoCard from '../components/VideoCard';
import '../styles/matrix-theme.css';

const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(`${process.env.PUBLIC_URL}/videos.json?t=${timestamp}`);
        const data = await response.json();

        const loadedVideos: Video[] = data.videos.map((v: any) => ({
          id: v.id,
          title: v.title,
          description: v.description,
          thumbnailURL: v.thumbnailURL,
          videoURL: v.videoURL,
          duration: v.duration,
          category: v.category,
          difficulty: v.difficulty,
          instructor: v.instructor,
          tags: v.tags || [],
          equipment: v.equipment || [],
          isFeatured: v.isFeatured,
          createdAt: v.createdAt ? new Date(v.createdAt) : undefined
        }));

        setVideos(loadedVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error loading videos:', error);
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const handleVideoSelect = (video: Video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };

  if (loading) {
    return (
      <div className="matrix-loading">
        Loading favorites
      </div>
    );
  }

  const favoriteVideos = videos.filter(v => favorites.includes(v.id));

  return (
    <div>
      <div style={{
        padding: '30px 20px',
        textAlign: 'center',
        borderBottom: '2px solid var(--matrix-green)'
      }}>
        <h1 style={{
          fontSize: '36px',
          marginBottom: '12px'
        }}>
          My Favorites
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {favoriteVideos.length === 0
            ? 'No favorites yet. Start adding videos to your favorites!'
            : `You have ${favoriteVideos.length} favorite ${favoriteVideos.length === 1 ? 'video' : 'videos'}`
          }
        </p>
      </div>

      {favoriteVideos.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '80px 20px'
        }}>
          <h2 style={{ marginBottom: '20px' }}>No Favorites Yet</h2>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '30px',
            maxWidth: '500px',
            margin: '0 auto 30px'
          }}>
            Browse the video library and click the star icon on any video to add it to your favorites.
          </p>
          <button
            className="matrix-button matrix-button-primary"
            onClick={() => navigate('/videos')}
          >
            Browse Videos
          </button>
        </div>
      ) : (
        <div className="video-grid">
          {favoriteVideos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={handleVideoSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
