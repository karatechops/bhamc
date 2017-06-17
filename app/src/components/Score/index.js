import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import StarIcon from 'grommet/components/icons/base/Star';
import FilledStarIcon from 'components/FilledStarIcon';

export const Score = ({ value }) => {
  const roundedValue = Math.ceil(value);
  const starsArray = [];
  for (let i = 0; i < 5; i++) { // eslint-disable-line no-plusplus
    if (roundedValue > i) {
      starsArray.push(true);
    } else {
      starsArray.push(false);
    }
  }

  return (
    <Box direction="row" responsive={false}>
      {starsArray.length > 0 && starsArray.map((star) => {
        if (star) {
          return <FilledStarIcon colorIndex="accent-1" />;
        }
        return <StarIcon colorIndex="grey-4-a" />;
      })}
    </Box>
  );
};

Score.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Score;
