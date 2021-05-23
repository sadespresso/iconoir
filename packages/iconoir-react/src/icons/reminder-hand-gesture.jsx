import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ReminderHandGesture = forwardRef(
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
            d="M17.5 11.9999L19.5041 14.6721C20.0815 15.442 20.0287 16.5141 19.3784 17.2235L15.5945 21.3514C15.2157 21.7647 14.6817 21.9999 14.1211 21.9999C13.0349 21.9999 11.2585 21.9999 9.5 21.9999C7.14159 21.9999 5.87758 19.4249 5.51817 18.0704C5.50559 18.023 5.5 17.9762 5.5 17.9271C5.5 17.1881 5.5 11.039 5.5 9.42852C5.5 7.1428 8.5 7.1428 8.5 9.42852C8.5 9.87483 8.5 9.99995 8.5 9.99995"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 9.99998C11.5 9.99998 11.5 9.17832 11.5 8.2857C11.5 5.99998 8.5 5.99998 8.5 8.2857C8.5 8.50885 8.5 9.2054 8.5 9.42855C8.5 9.87487 8.5 9.99998 8.5 9.99998"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 10.0001C14.5 10.0001 14.5 8.61584 14.5 7.50005C14.5 5.21434 11.5 5.21434 11.5 7.50005C11.5 7.50005 11.5 7.50005 11.5 7.50005C11.5 7.50005 11.5 8.06261 11.5 8.28577C11.5 9.17839 11.5 10.0001 11.5 10.0001"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 10C14.5 10 14.5 8.61578 14.5 7.5C14.5 6.34156 14.5 4.68968 14.5 3.49899C14.5 2.67056 15.1716 2 16 2V2C16.8284 2 17.5 2.67157 17.5 3.5V12V15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5625 6.5H19.625C20.5 6.5 21 6.07843 21 5.25C21 4.42157 20.5 4 19.625 4H17.5625H14.4375H12.25C11.5596 4 11 4.55964 11 5.25V5.5C11 6.05228 11.4477 6.5 12 6.5V6.5"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

ReminderHandGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ReminderHandGesture.displayName = 'ReminderHandGesture';

export default ReminderHandGesture;
