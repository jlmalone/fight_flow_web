import React, { useState, useEffect } from 'react';
import { Video, VideoCategory, VideoDifficulty } from '../types/Video';
import VideoCard from './VideoCard';
import '../styles/matrix-theme.css';

interface VideoGridProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoSelect }) => {
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(videos);
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<VideoDifficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = videos;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(v => v.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(v => v.difficulty === selectedDifficulty);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query) ||
        v.tags.some(tag => tag.toLowerCase().includes(query)) ||
        (v.instructor && v.instructor.toLowerCase().includes(query))
      );
    }

    setFilteredVideos(filtered);
  }, [videos, selectedCategory, selectedDifficulty, searchQuery]);

  const categories: (VideoCategory | 'all')[] = ['all', ...Object.values(VideoCategory)];
  const difficulties: (VideoDifficulty | 'all')[] = ['all', ...Object.values(VideoDifficulty)];

  return (
    <div>
      {/* Filter Section */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="matrix-input"
          style={{ maxWidth: '400px' }}
        />

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ marginRight: '8px', fontSize: '12px' }}>Category:</span>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div>
            <span style={{ marginRight: '8px', fontSize: '12px' }}>Difficulty:</span>
            {difficulties.map(diff => (
              <button
                key={diff}
                className={`filter-button ${selectedDifficulty === diff ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(diff)}
              >
                {diff === 'all' ? 'All' : diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={{
        padding: '16px 24px',
        color: 'var(--text-secondary)',
        fontSize: '14px'
      }}>
        Showing {filteredVideos.length} of {videos.length} videos
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {filteredVideos.length === 0 ? (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '60px 20px',
            color: 'var(--text-secondary)'
          }}>
            <h2>No videos found</h2>
            <p>Try adjusting your filters or search query</p>
          </div>
        ) : (
          filteredVideos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={onVideoSelect}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default VideoGrid;
