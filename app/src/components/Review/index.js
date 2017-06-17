import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'components/Paragraph';
import Score from 'components/Score';
import { prettyDate } from 'utils';

export const Review = ({ person, review, date, score }) =>
  <Box size="xlarge" pad="small">
    <Box direction="row" justify="between">
      <Heading tag="h3" style={{ textTransform: 'capitalize' }}>
        {person}
      </Heading>
      <Score value={score} />
    </Box>
    {review && review.split('\\n').map((item, key) =>
      <Paragraph key={key} margin="small">{item}</Paragraph>)}
    <Paragraph
      margin="none"
      align="start"
      size="small"
      style={{
        opacity: 0.65,
      }}
    >
      {prettyDate(new Date(date))}
    </Paragraph>
  </Box>;

Review.propTypes = {
  person: PropTypes.string.isRequired,
  review: PropTypes.string,
  date: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default Review;
