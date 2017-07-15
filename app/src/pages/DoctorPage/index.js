import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Doctor from 'containers/Doctor';
import { SectionHeader } from 'components';

export default class DoctorPage extends Component {
  static fetchData() {
  }
  render() {
    const { id } = this.props.params;

    return (
      <Box justify="center" align="center">
        <SectionHeader title="Our Doctors" />
        <Box size={{ width: 'xlarge' }} align="center" pad="medium">
          <Doctor id={id} />
        </Box>
      </Box>
    );
  }
}

DoctorPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
