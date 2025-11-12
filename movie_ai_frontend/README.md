# Movie AI Frontend

This app now ships a modern, responsive dashboard UI with:
- Left sidebar with navigation (Home, Featured, Trending)
- Welcome section with title, description, and two action buttons
- Trending Movies grid of placeholder cards (Movie 1..Movie 6)
- Purple and white gradient theme, rounded cards, soft shadows, and hover effects

Getting started:
- npm start — open http://localhost:3000
- No routing is required; buttons have console.log handlers for now

Customization:
- Theme variables and layout styles in `src/App.css`
- Components in `src/components/`:
  - Sidebar.jsx, Welcome.jsx, Trending.jsx, MovieCard.jsx, Button.jsx

Accessibility:
- Semantic tags, aria-labels on nav and controls, focus styles for keyboard users
