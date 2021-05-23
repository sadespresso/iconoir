import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ColorFilter = forwardRef(
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
            d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 21.5C19.3137 21.5 22 18.8137 22 15.5C22 12.1863 19.3137 9.5 16 9.5C12.6863 9.5 10 12.1863 10 15.5C10 18.8137 12.6863 21.5 16 21.5Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 21.5C11.3137 21.5 14 18.8137 14 15.5C14 12.1863 11.3137 9.5 8 9.5C4.68629 9.5 2 12.1863 2 15.5C2 18.8137 4.68629 21.5 8 21.5Z"
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

ColorFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ColorFilter.displayName = 'ColorFilter';

export default ColorFilter;