import React from 'react';
import PropTypes from 'prop-types';

// PUBLIC_INTERFACE
export default function MovieCard({ title, info }) {
  /** Card showing a placeholder poster, movie title, and info text. */
  return (
    <article className="movie-card" tabIndex="0" aria-label={`${title} card`}>
      <div className="poster" aria-hidden="true">
        <div className="poster-gradient" />
        <span className="poster-badge">HD</span>
      </div>
      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-info">{info}</p>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
};

MovieCard.defaultProps = {
  info: 'Action • 2h 10m',
};
