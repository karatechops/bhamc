import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import DoctorListItem from 'components/DoctorListItem';
import WithLoading from 'components/WithLoading';
import * as DoctorsActions from './actions';

export class Doctors extends Component {
  componentDidMount() {
    this.props.dispatch(DoctorsActions.loadData());
  }

  render() {
    const { data, error, request } = this.props;

    const posts = (!request && data.length > 0)
      ? data.map(({ biography, name, profile, id }) =>
        <DoctorListItem
          biography={biography}
          name={name}
          profile={profile}
          id={id}
          key={`doctor-${id}`}
        />,
      )
      : undefined;

    return (
      <Box align="center">
        <WithLoading request={request}>
          {error ||
            <Box
              wrap
              full="horizontal"
              direction="row"
            >
              {posts}
            </Box>
        }
        </WithLoading>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.doctors;
  return {
    request, error, data,
  };
}

Doctors.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      paragraph: PropTypes.string,
    }),
  ),
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
};

export default connect(mapStateToProps)(Doctors);
