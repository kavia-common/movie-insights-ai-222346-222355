import React from 'react';
import PropTypes from 'prop-types';

// PUBLIC_INTERFACE
export default function Button({ label, onClick, variant = 'primary', size = 'md', ariaLabel }) {
  /** Render a themed button with hover/active effects and accessible labeling. */
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
  ].join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => console.log('Button clicked'),
  variant: 'primary',
  size: 'md',
  ariaLabel: undefined,
};
