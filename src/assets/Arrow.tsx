import { Fragment } from 'react';

type ArrowProps = {
  fill?: string;
  width?: number;
  height?: number;
  color?: string;
  rotate?: boolean;
};

export const Arrow = ({
  fill = 'none',
  width = 18,
  height = 23,
  color = '#232323',
  rotate = false,
}: ArrowProps) => (
  <Fragment>
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 23'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      transform={`rotate(${rotate ? 180 : 0})`}
    >
      <path d='M1 1L15 11.3158L1 21.6316' stroke={color} stroke-width='2.4' />
    </svg>
  </Fragment>
);
