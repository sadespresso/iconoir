import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const HeadsetHelp = forwardRef(
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
            d="M20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 15.4384V13.5616C2 12.6438 2.62459 11.8439 3.51493 11.6213L5.25448 11.1864C5.63317 11.0917 6 11.3781 6 11.7685V17.2315C6 17.6219 5.63317 17.9083 5.25448 17.8136L3.51493 17.3787C2.62459 17.1561 2 16.3562 2 15.4384Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M22 15.4384V13.5616C22 12.6438 21.3754 11.8439 20.4851 11.6213L18.7455 11.1864C18.3668 11.0917 18 11.3781 18 11.7685V17.2315C18 17.6219 18.3668 17.9083 18.7455 17.8136L20.4851 17.3787C21.3754 17.1561 22 16.3562 22 15.4384Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M20 18V18.5C20 19.6046 19.1046 20.5 18 20.5H14.5"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M13.5 22H10.5C9.67157 22 9 21.3284 9 20.5C9 19.6716 9.67157 19 10.5 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

HeadsetHelp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HeadsetHelp.displayName = 'HeadsetHelp';

export default HeadsetHelp;