import React from 'react';

export const FilledStarIcon = () =>
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    role="img"
    className="grommetux-control-icon grommetux-control-icon-star grommetux-control-icon--responsive"
    aria-label="star"
    style={{
      fill: 'rgb(255, 219, 68)',
      stroke: 'rgb(255, 219, 68)',
    }}
  >
    <polygon
      fill="rgb(255, 219, 68)"
      stroke="#000"
      strokeWidth="2"
      points="5 21 8 14 3 9 9 9 12 3 15 9 21 9 16 14 19 21 12 17"
    />
  </svg>;

export default FilledStarIcon;
