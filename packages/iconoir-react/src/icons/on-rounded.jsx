import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const OnRounded = forwardRef(
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
            d="M1 15V9C1 5.68629 3.68629 3 7 3H17C20.3137 3 23 5.68629 23 9V15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M9 9C10.6569 9 12 10.3431 12 12C12 13.6569 10.6569 15 9 15C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M14 15V9L18 15V9"
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

OnRounded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OnRounded.displayName = 'OnRounded';

export default OnRounded;
