# Fight Flow Web - Claude AI Context

## Project Overview

Fight Flow Web is a comprehensive fitness video streaming platform built with React, TypeScript, and Firebase. It serves as the web companion to the Fight Flow iOS and tvOS applications, providing on-demand access to workout videos with a distinctive Matrix-themed interface.

## Technology Stack

- **Frontend**: React 19, TypeScript, React Router
- **Styling**: CSS3 with Matrix theme design system
- **Deployment**: GitHub Pages
- **Future**: Firebase (authentication, database, hosting)

## Project Structure

```
fight_flow_web/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with Matrix styling
│   │   ├── VideoCard.tsx       # Video card with thumbnail and metadata
│   │   └── VideoGrid.tsx       # Grid layout with filtering and search
│   ├── pages/
│   │   ├── HomePage.tsx        # Landing page with hero section
│   │   ├── VideosPage.tsx      # Video library with filters
│   │   ├── VideoPlayerPage.tsx # Full video player with details
│   │   └── AboutPage.tsx       # About page
│   ├── styles/
│   │   └── matrix-theme.css    # Complete Matrix design system
│   ├── types/
│   │   └── Video.ts            # TypeScript type definitions
│   ├── App.tsx                 # Main app with routing
│   ├── index.tsx               # Entry point
│   └── index.css               # Global styles
├── public/
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## Design System - Matrix Theme

### Color Palette
- **Primary**: `#00cc66` (Matrix Green) - Main UI color
- **Accent**: `#00ff88` (Bright Green) - Hover states and emphasis
- **Background**: `#000000` (Pure Black) - All backgrounds
- **Text Primary**: `#00cc66` (Matrix Green)
- **Text Secondary**: `rgba(0, 204, 102, 0.7)` (70% opacity green)

### Difficulty Colors
- **Beginner**: `#00cc66` (Green)
- **Intermediate**: `#ffaa00` (Amber/Orange)
- **Advanced**: `#ff4444` (Red)

### Typography
- **Font Family**: 'Menlo', 'Courier New', monospace
- **Headers**: Uppercase, 2px letter-spacing, text-shadow glow
- **Body**: Matrix green with secondary opacity for less important text

### Component Styles
- **Buttons**: Black bg, green border, glow effect, green fill on hover
- **Cards**: Black bg, 2px green border, glow shadow, scale on hover
- **Inputs**: Black bg, green border, stronger glow on focus
- **Video Cards**: Thumbnail, metadata, scale transform (1.03) on hover

### Effects
- **Glow**: `0 0 10px #00cc66` (standard), `0 0 20px #00cc66` (strong)
- **Flicker**: Subtle 3s animation alternating opacity
- **Transitions**: 0.3s ease for all interactive elements

## Data Models

### Video Interface
```typescript
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailURL: string;
  videoURL: string;
  duration?: number;  // in seconds
  category: VideoCategory;
  difficulty: VideoDifficulty;
  instructor?: string;
  tags: string[];
  equipment?: string[];
  isFeatured: boolean;
  createdAt?: Date;
}
```

### Video Categories (Enum)
- Technique
- Flow
- Retreat
- Beginner
- Intermediate
- Advanced
- Mindfulness
- Strength
- Flexibility

### Video Difficulty (Enum)
- Beginner
- Intermediate
- Advanced

## Key Features

### Implemented ✅
- Matrix-themed responsive UI
- Video library with grid layout
- Smart filtering (category, difficulty, search)
- Full-screen video player
- Video detail pages with metadata
- Mobile-optimized responsive design
- React Router navigation
- TypeScript type safety
- GitHub Pages deployment config

### Planned 🚧
- Firebase integration for video data
- User authentication (Firebase Auth)
- Favorites system
- Custom playlists
- Watch history tracking
- Progress tracking
- Video recommendations
- User profiles
- Social features

## Development Commands

```bash
# Development
npm start               # Start dev server on localhost:3000
npm test                # Run tests
npm run build           # Build for production

# Deployment
npm run deploy          # Deploy to GitHub Pages

# Linting & Type Checking
npm run lint            # (to be added)
npm run typecheck       # (to be added)
```

## Deployment

### GitHub Pages
The project is configured for GitHub Pages deployment:
- **Homepage**: https://jlmalone.github.io/fight_flow_web
- **Deploy**: `npm run deploy`
- **Build Output**: `/fight_flow_web/` subdirectory

### Firebase Hosting (Future)
When ready for Firebase:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init`
3. Deploy: `firebase deploy`

## Component Guidelines

### Creating New Components
1. Use TypeScript (.tsx extension)
2. Import Matrix theme: `import '../styles/matrix-theme.css'`
3. Use semantic HTML elements
4. Apply Matrix CSS classes where appropriate
5. Add TypeScript interfaces for props
6. Include responsive design considerations

### Matrix CSS Classes
- `.matrix-button` - Standard button styling
- `.matrix-button-primary` - Primary (filled) button
- `.matrix-card` - Card container with border and glow
- `.matrix-input` - Input field styling
- `.video-card` - Video card with thumbnail
- `.difficulty-badge` - Difficulty level badge
- `.filter-button` - Filter button in video grid
- `.matrix-loading` - Loading state

### Example Component
```tsx
import React from 'react';
import '../styles/matrix-theme.css';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="matrix-card">
      <h2>{title}</h2>
      <button className="matrix-button">
        Click Me
      </button>
    </div>
  );
};

export default MyComponent;
```

## Relationship to iOS/tvOS Apps

This web app complements the Fight Flow iOS and tvOS applications:
- **Shared**: Video library, categories, difficulty levels, branding
- **Unique to Web**: Matrix theme, web-optimized UI, browser compatibility
- **Future Sync**: User data sync via Firebase (favorites, progress, etc.)

### iOS App Location
- Path: `~/ios_code/fight_flow_ios`
- Key File: `fightandflow/VideoModel.swift`
- Design: `fightandflow/Design/MatrixColors.swift`

### tvOS App Location
- Path: `~/ios_code/fightandflowtv`
- Key File: `fightandflowtv2/Video.swift`
- Migration Docs: `MATRIX_THEME_MIGRATION.md`

## AI Agent Guidelines

### When Adding Features
1. Maintain Matrix theme consistency
2. Use TypeScript types from `types/Video.ts`
3. Follow existing component patterns
4. Test responsive design on mobile
5. Update README if adding major features
6. Commit with descriptive messages

### When Debugging
1. Check browser console for errors
2. Verify Matrix CSS classes are applied
3. Test on both desktop and mobile viewports
4. Ensure TypeScript types are correct
5. Check React Router navigation

### When Styling
1. Use CSS variables from `matrix-theme.css`
2. Apply glow effects to important elements
3. Use uppercase for headers
4. Maintain 2px letter-spacing on titles
5. Use Menlo/Courier New fonts
6. Test hover/focus states

## Testing Strategy

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Video cards display properly
- [ ] Filters update video list
- [ ] Search functionality works
- [ ] Video player loads and plays
- [ ] Responsive on mobile (< 768px)
- [ ] Matrix theme applied consistently
- [ ] No TypeScript errors in console

### Future Automated Testing
- Unit tests for components
- Integration tests for video filtering
- E2E tests for user flows
- Visual regression tests for Matrix theme

## Known Issues & TODOs

### Current
- Sample video data (replace with Firebase)
- No actual video URLs (need real content)
- No user authentication yet
- No favorites/playlists yet

### Next Steps
1. Set up Firebase project
2. Create Firestore schema for videos
3. Implement Firebase authentication
4. Add video upload/management interface (admin)
5. Implement user features (favorites, playlists)
6. Add analytics tracking

## Resources

- **iOS Codebase**: `~/ios_code/fight_flow_ios`
- **tvOS Codebase**: `~/ios_code/fightandflowtv`
- **REDO Web App** (Matrix theme reference): `~/WebstormProjects/redo-web-app`
- **GitHub Repo**: https://github.com/jlmalone/fight_flow_web

---

**Last Updated**: November 2025
**Project Status**: Initial implementation complete, Firebase integration pending
