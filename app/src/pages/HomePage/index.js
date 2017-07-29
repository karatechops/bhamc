import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'components/Paragraph';
import Announcements from 'containers/Announcements';
import Reviews from 'containers/Reviews';
import { SectionHeader } from 'components';
import HomeCopy from './messages';
import bhamc from './bhamc.jpg';

export default class HomePage extends Component {
  static fetchData() {
  }
  render() {
    return (
      <Box justify="center" align="center">
        <SectionHeader title="Our Statement" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Heading tag="h3" margin="none">
            {HomeCopy.quote}
          </Heading>
          <Paragraph>
            {HomeCopy.statement}
          </Paragraph>
          <img src={bhamc} alt="BHAMC" style={{ width: '100%' }} />
        </Box>
        <SectionHeader title="Announcements" />
        <Box size={{ width: 'xlarge' }}>
          <Box pad="small" />
          <Announcements />
        </Box>
        <Box id="reviews" />
        <SectionHeader title="Reviews" />
        <Box size={{ width: 'xlarge' }}>
          <Box pad="small" />
          <Reviews />
        </Box>
      </Box>
    );
  }
}