import React from 'react';

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Left sidebar with brand and navigation links. Collapses via CSS on small screens. */
  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="brand">
        <span className="brand-accent">🎬</span>
        <span className="brand-name">Movie AI</span>
      </div>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="#home" className="nav-link" aria-current="page">Home</a></li>
          <li><a href="#featured" className="nav-link">Featured</a></li>
          <li><a href="#trending" className="nav-link">Trending</a></li>
        </ul>
      </nav>
    </aside>
  );
}
