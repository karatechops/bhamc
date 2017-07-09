import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Articles from 'containers/Articles';
import { SectionHeader } from 'components';

export default class PetCarePage extends Component {
  static fetchData() {
  }
  render() {
    const urlQuery = this.props.location.query;
    return (
      <Box justify="center" align="center">
        <SectionHeader title="Pet Care" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Articles query={urlQuery} />
        </Box>
      </Box>
    );
  }
}

PetCarePage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  }),
};
