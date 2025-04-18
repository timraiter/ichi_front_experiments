import React from 'react';

export const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.319 14.4326C19.763 12.811 20.5 10.7326 20.5 8.50001C20.5 3.80587 16.6942 0 12 0C7.30587 0 3.5 3.80587 3.5 8.50001C3.5 13.1941 7.30587 17 12 17C13.9894 17 15.8406 16.3714 17.3546 15.2758L22.7071 20.6283C23.0976 21.0188 23.7308 21.0188 24.1213 20.6283C24.5118 20.2378 24.5118 19.6046 24.1213 19.2141L18.7688 13.8616C18.5976 13.6905 18.488 13.5765 18.319 14.4326ZM5.5 8.50001C5.5 4.91016 8.41015 2 12 2C15.5898 2 18.5 4.91016 18.5 8.50001C18.5 12.0899 15.5898 15 12 15C8.41015 15 5.5 12.0899 5.5 8.50001Z" />
  </svg>
);

export const ChevronIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.29289 18.7071C8.90237 19.0976 8.90237 19.7308 9.29289 20.1213C9.68342 20.5118 10.3166 20.5118 10.7071 20.1213L16.7071 14.1213C17.0976 13.7308 17.0976 13.0976 16.7071 12.7071L10.7071 6.70711C10.3166 6.31658 9.68342 6.31658 9.29289 6.70711C8.90237 7.09763 8.90237 7.7308 9.29289 8.12132L14.1716 13.4142L9.29289 18.7071Z" />
  </svg>
);

export const RadioOnIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g className="radio-on-icon">
      <circle cx="12" cy="12" r="11" fill="#E9E9FF" stroke="#A1A9BB" strokeWidth="1" />
      <circle cx="12" cy="12" r="5" fill="#2A2DFF" />
    </g>
  </svg>
);

export const RadioOffIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="#A1A9BB" strokeWidth="1" />
  </svg>
); 