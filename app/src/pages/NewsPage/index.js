import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { Newsletter } from 'containers';
import { SectionHeader } from 'components';

export default class DoctorsPage extends Component {
  static fetchData() {
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader
          title="Monthly Newsletter"
        />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Newsletter />
        </Box>
      </Box>
    );
  }
}