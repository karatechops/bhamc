import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { SectionHeader } from 'components';

export default class PetCarePage extends Component {
  static fetchData() {
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader title="Pet Care" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">

        </Box>
      </Box>
    );
  }
}
