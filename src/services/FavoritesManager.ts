/**
 * FavoritesManager - Persistent favorites storage using localStorage
 * Based on Fight Flow iOS FavoritesManager.swift
 */

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'fight_flow_favorites';

export class FavoritesManager {
  private static instance: FavoritesManager;
  private favoriteIds: Set<string>;
  private listeners: Array<() => void> = [];

  private constructor() {
    this.favoriteIds = this.loadFavorites();
  }

  static getInstance(): FavoritesManager {
    if (!FavoritesManager.instance) {
      FavoritesManager.instance = new FavoritesManager();
    }
    return FavoritesManager.instance;
  }

  private loadFavorites(): Set<string> {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const ids = JSON.parse(stored);
        return new Set(Array.isArray(ids) ? ids : []);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    return new Set();
  }

  private saveFavorites(): void {
    try {
      const ids = Array.from(this.favoriteIds);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
      this.notifyListeners();
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }

  isFavorite(videoId: string): boolean {
    return this.favoriteIds.has(videoId);
  }

  toggleFavorite(videoId: string): boolean {
    if (this.favoriteIds.has(videoId)) {
      this.favoriteIds.delete(videoId);
      this.saveFavorites();
      return false;
    } else {
      this.favoriteIds.add(videoId);
      this.saveFavorites();
      return true;
    }
  }

  addFavorite(videoId: string): void {
    if (!this.favoriteIds.has(videoId)) {
      this.favoriteIds.add(videoId);
      this.saveFavorites();
    }
  }

  removeFavorite(videoId: string): void {
    if (this.favoriteIds.has(videoId)) {
      this.favoriteIds.delete(videoId);
      this.saveFavorites();
    }
  }

  getFavorites(): string[] {
    return Array.from(this.favoriteIds);
  }

  getFavoriteCount(): number {
    return this.favoriteIds.size;
  }

  clearAllFavorites(): void {
    this.favoriteIds.clear();
    this.saveFavorites();
  }

  // Observer pattern for UI updates
  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}

// Hook for React components
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const manager = FavoritesManager.getInstance();

  useEffect(() => {
    // Initial load
    setFavorites(manager.getFavorites());

    // Subscribe to changes
    const unsubscribe = manager.subscribe(() => {
      setFavorites(manager.getFavorites());
    });

    return unsubscribe;
  }, [manager]);

  return {
    favorites,
    isFavorite: (id: string) => manager.isFavorite(id),
    toggleFavorite: (id: string) => manager.toggleFavorite(id),
    addFavorite: (id: string) => manager.addFavorite(id),
    removeFavorite: (id: string) => manager.removeFavorite(id),
    count: favorites.length
  };
}
