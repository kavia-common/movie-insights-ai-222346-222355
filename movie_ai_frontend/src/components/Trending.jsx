import React from 'react';
import MovieCard from './MovieCard';

// PUBLIC_INTERFACE
export default function Trending() {
  /** Trending Movies section with responsive grid layout. */
  const movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6'];
  return (
    <section id="trending" className="trending" aria-labelledby="trending-title">
      <div className="section-head">
        <h2 id="trending-title">Trending Movies</h2>
        <p className="section-subtitle">Popular picks updated frequently</p>
      </div>
      <div className="grid">
        {movies.map((m) => (
          <MovieCard key={m} title={m} />
        ))}
      </div>
    </section>
  );
}
