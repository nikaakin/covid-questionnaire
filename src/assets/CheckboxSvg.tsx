import { Fragment } from 'react';

export const CheckboxSvg = ({ fill = false }) => (
  <Fragment>
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='11.5' cy='11.5' r='11' stroke='#232323' />
      {fill && <circle cx='11.5' cy='11.5' r='8.5' fill='#232323' />}
    </svg>
  </Fragment>
);
