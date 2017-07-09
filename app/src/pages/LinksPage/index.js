import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Forms from 'containers/Forms';
import Links from 'containers/Links';
import { SectionHeader } from 'components';

export default class LinksPage extends Component {
  static fetchData() {
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader title="Forms" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Forms />
        </Box>
        <SectionHeader title="Links" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          Below is a list of important links for our clients.
          <Links />
        </Box>
      </Box>
    );
  }
}
