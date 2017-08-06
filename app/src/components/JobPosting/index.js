import React, { PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import { JobPostingDescription } from './styles';

export const JobPosting = ({ title, contactEmail, contactPhone, description }) =>
  <Box
    textAlign="center"
    full="horizontal"
    align="center"
  >
    <Box full="horizontal">
      <Heading tag="h1">
        {title}
      </Heading>
    </Box>
    <Box
      direction="row"
      full="horizontal"
    >
      <Box basis="1/2">
        <JobPostingDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Box>
      <Box basis="1/2">
        <h3>
          Contact
        </h3>
        <Paragraph margin="none">
          Phone: {contactPhone}
        </Paragraph>
        <Paragraph margin="small">
          Email: <Anchor href={`mailTo:${contactEmail}`}>{contactEmail}</Anchor>
        </Paragraph>
      </Box>
    </Box>
    <Box
      pad="small"
      separator="bottom"
      size={{
        width: 'medium',
      }}
    />
  </Box>;

JobPosting.propTypes = {
  title: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contactPhone: PropTypes.string.isRequired,
};

export default JobPosting;
