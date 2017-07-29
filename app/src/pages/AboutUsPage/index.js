import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { SectionHeader } from 'components';

export default class AboutUsPage extends Component {
  static fetchData() {
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader title="About Us" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">

        </Box>
      </Box>
    );
  }
}