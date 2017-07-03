import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

export const NewsletterSection = ({ title }) =>
  <Box
    pad="medium"
    separator="bottom"
    size={{ width: 'medium' }}
    align="center"
  >
    <Heading tag="h2" margin="none">
      {title}
    </Heading>
  </Box>;

NewsletterSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NewsletterSection;
