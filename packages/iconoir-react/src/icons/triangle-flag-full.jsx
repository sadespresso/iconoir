import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const TriangleFlagFull = forwardRef(
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
            d="M8 21L8 16M8 16L17.7231 9.51793C18.0866 9.2756 18.0775 8.73848 17.7061 8.50854L8.91581 3.06693C8.5161 2.81949 8 3.10699 8 3.57709V16Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 11.0001L14.5 6.52393"
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

TriangleFlagFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TriangleFlagFull.displayName = 'TriangleFlagFull';

export default TriangleFlagFull;
