import React from 'react';
import Button from './Button';

// PUBLIC_INTERFACE
export default function Welcome() {
  /** Welcome section with title, description, and primary CTA buttons. */
  const onFeatured = () => console.log('View Featured clicked');
  const onTrending = () => console.log('View Trending clicked');

  return (
    <header className="welcome" role="banner">
      <div className="welcome-text">
        <h1>Welcome to Movie AI</h1>
        <p className="welcome-desc">
          Discover trending films, explore featured picks, and let AI guide your next great watch.
        </p>
      </div>
      <div className="welcome-actions">
        <Button label="View Featured" onClick={onFeatured} variant="primary" size="lg" ariaLabel="View Featured Movies" />
        <Button label="View Trending" onClick={onTrending} variant="secondary" size="lg" ariaLabel="View Trending Movies" />
      </div>
    </header>
  );
}
