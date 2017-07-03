import React, { PropTypes } from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import UpIcon from 'grommet/components/icons/base/Up';
import { slugify } from 'utils';

export const NewsletterSection = ({ title, content }) =>
  <Box
    id={title && slugify(title)}
    pad={{
      vertical: 'medium',
    }}
  >
    <Heading tag="h3">
      {title}
    </Heading>
    <div dangerouslySetInnerHTML={{ __html: content[title] }} />
    <Box align="end">
      <Button
        icon={<UpIcon />}
        path="/news#table-of-contents"
        label="Table of Contents"
        colorIndex="accent-2"
        plain
      />
    </Box>
  </Box>;

NewsletterSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default NewsletterSection;
