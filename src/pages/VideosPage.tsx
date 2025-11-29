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
    // TODO: Replace with actual API call or Firebase fetch
    // For now, using sample data
    const loadVideos = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Sample videos (you'll replace this with actual data)
        const sampleVideos: Video[] = [
          {
            id: '1',
            title: 'Fight and Flow Video 1',
            description: 'High-energy movement practice combining martial arts techniques with flowing movements',
            thumbnailURL: 'https://via.placeholder.com/400x200/000000/00cc66?text=Fight+Flow+1',
            videoURL: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            duration: 111,
            category: 'Flow' as any,
            difficulty: 'Beginner' as any,
            instructor: 'Fight and Flow',
            tags: ['workout', 'flow', 'movement'],
            equipment: [],
            isFeatured: true
          },
          // Add more sample videos as needed
        ];

        setVideos(sampleVideos);
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
