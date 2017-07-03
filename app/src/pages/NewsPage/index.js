import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { Newsletter } from 'containers';

export default class DoctorsPage extends Component {
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
            Monthly Newsletter
          </Heading>
        </Box>
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Newsletter />
        </Box>
      </Box>
    );
  }
}