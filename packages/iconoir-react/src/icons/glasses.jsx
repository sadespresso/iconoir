import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Glasses = forwardRef(
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
            d="M2 14C2 16.2091 3.79086 18 6 18C8.20914 18 10 16.2091 10 14C10 11.7909 8.20914 10 6 10C3.79086 10 2 11.7909 2 14ZM2 14V6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 14C22 16.2091 20.2091 18 18 18C15.7909 18 14 16.2091 14 14C14 11.7909 15.7909 10 18 10C20.2091 10 22 11.7909 22 14ZM22 14V6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 14H10"
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

Glasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Glasses.displayName = 'Glasses';

export default Glasses;
