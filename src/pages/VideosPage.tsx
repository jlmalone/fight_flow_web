import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video } from '../types/Video';
import VideoGrid from '../components/VideoGrid';
import '../styles/matrix-theme.css';

const VideosPage: React.FC = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        // Load videos from JSON file with cache busting
        const timestamp = new Date().getTime();
        const response = await fetch(`${process.env.PUBLIC_URL}/videos.json?t=${timestamp}`);
        const data = await response.json();

        console.log('Loaded videos:', data.videos?.length || 0);

        // Parse the videos array from the JSON structure
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
    // Navigate to video detail page
    navigate(`/video/${video.id}`, { state: { video } });
  };

  if (loading) {
    return (
      <div className="matrix-loading">
        Loading videos
      </div>
    );
  }

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
          Video Library
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Browse our collection of fight choreography and flow movement videos
        </p>
      </div>

      <VideoGrid videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default VideosPage;
