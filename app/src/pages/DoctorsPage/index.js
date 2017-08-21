import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Doctors from 'containers/Doctors';
import { SectionHeader } from 'components';
import * as DoctorsActions from 'containers/Doctors/actions';

export default class DoctorsPage extends Component {
  static fetchData() {
    return [
      DoctorsActions.loadData(),
    ];
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader title="Our Doctors" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Doctors />
        </Box>
      </Box>
    );
  }
}