import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Leaderboard = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19H9V12.5V8.6C9 8.26863 9.26863 8 9.6 8H14.4C14.7314 8 15 8.26863 15 8.6V14.5V19Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 5H9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4 19H15V15.1C15 14.7686 15.2686 14.5 15.6 14.5H20.4C20.7314 14.5 21 14.7686 21 15.1V18.4C21 18.7314 20.7314 19 20.4 19Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 19V13.1C9 12.7686 8.73137 12.5 8.4 12.5H3.6C3.26863 12.5 3 12.7686 3 13.1V18.4C3 18.7314 3.26863 19 3.6 19H9Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

Leaderboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Leaderboard.displayName = 'Leaderboard';

export default Leaderboard;
