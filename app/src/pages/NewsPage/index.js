import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { Newsletter } from 'containers';
import { SectionHeader } from 'components';
import * as NewsletterActions from 'containers/Newsletter/actions';

export default class DoctorsPage extends Component {
  static fetchData() {
    return [
      NewsletterActions.loadData(),
    ];
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