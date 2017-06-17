import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'components/Paragraph';
import Announcements from 'containers/Announcements';
import HomeCopy from './messages';

export default class HomePage extends Component {
  static fetchData() {
  }
  render() {
    return (
      <Box justify="center" align="center">
        <Box
          pad="medium"
          separator="bottom"
          size={{ width: 'medium' }}
          align="center"
        >
          <Heading tag="h2" margin="none">
            Our Statement
          </Heading>
        </Box>
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Heading tag="h3" margin="none">
            {HomeCopy.quote}
          </Heading>
          <Paragraph>
            {HomeCopy.statement}
          </Paragraph>
        </Box>
        <Box
          pad="medium"
          separator="bottom"
          size={{ width: 'medium' }}
          align="center"
        >
          <Heading tag="h2" margin="none">
            Announcements
          </Heading>
        </Box>
        <Box size={{ width: 'xlarge' }}>
          <Box pad="small" />
          <Announcements />
        </Box>
      </Box>
    );
  }
}