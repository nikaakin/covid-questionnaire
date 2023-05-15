import { Fragment } from 'react';

export const Arrow = ({ color = '#232323', className = '' }) => (
  <Fragment>
    <svg
      width='18'
      height='23'
      viewBox='0 0 18 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M1 1L15 11.3158L1 21.6316' stroke={color} stroke-width='2.4' />
    </svg>
  </Fragment>
);
