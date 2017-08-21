import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { JobPostings } from 'containers';
import { SectionHeader } from 'components';
import * as JobPostingsActions from 'containers/JobPostings/actions';

export default class CareersPage extends Component {
  static fetchData() {
    return [
      JobPostingsActions.loadData(),
    ];
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader title="Careers" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <JobPostings />
        </Box>
      </Box>
    );
  }
}