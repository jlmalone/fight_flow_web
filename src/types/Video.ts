/**
 * Video Type Definitions
 * Based on Fight Flow iOS VideoModel.swift
 */

export enum VideoCategory {
  TECHNIQUE = 'Technique',
  FLOW = 'Flow',
  RETREAT = 'Retreat',
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  MINDFULNESS = 'Mindfulness',
  STRENGTH = 'Strength',
  FLEXIBILITY = 'Flexibility'
}

export enum VideoDifficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailURL: string;
  videoURL: string;
  duration?: number; // in seconds
  category: VideoCategory;
  difficulty: VideoDifficulty;
  instructor?: string;
  tags: string[];
  equipment?: string[];
  isFeatured: boolean;
  createdAt?: Date;
}

export interface VideoLibrary {
  comment?: string;
  validation?: ValidationMetadata;
  videos: Video[];
}

export interface ValidationMetadata {
  totalVideos: number;
  validatedUrls: boolean;
  source: string;
  lastAudit: string;
  removedVideos?: number;
  removalReason?: string;
}

// Utility functions
export const formatDuration = (seconds?: number): string => {
  if (!seconds) return 'N/A';
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

export const getCategoryColor = (category: VideoCategory): string => {
  // Map categories to difficulty-based colors for visual hierarchy
  switch (category) {
    case VideoCategory.BEGINNER:
      return '#00cc66';
    case VideoCategory.INTERMEDIATE:
      return '#ffaa00';
    case VideoCategory.ADVANCED:
      return '#ff4444';
    default:
      return '#00cc66';
  }
};

export const getDifficultyColor = (difficulty: VideoDifficulty): string => {
  switch (difficulty) {
    case VideoDifficulty.BEGINNER:
      return '#00cc66';
    case VideoDifficulty.INTERMEDIATE:
      return '#ffaa00';
    case VideoDifficulty.ADVANCED:
      return '#ff4444';
  }
};
