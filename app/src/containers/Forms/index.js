import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import { DownloadLink } from 'components';
// import WithLoading from 'components/WithLoading';
// import * as FormsActions from './actions';

export class Forms extends Component {
  componentDidMount() {
    // this.props.dispatch(FormsActions.loadData());
  }

  render() {
    // const { data, error, request } = this.props;

    /* const posts = (!request && data.length > 0)
      ? data.map(({ biography, name, profile, id }) =>
        <DoctorListItem
          biography={biography}
          name={name}
          profile={profile}
          key={`doctor-${id}`}
        />,
      )
      : undefined; */

    return (
      <Box align="center" pad={{ between: 'medium' }}>
        {/* <WithLoading request={request}>
          {error || posts}
        </WithLoading> */}
        <DownloadLink
          label="Anesthesia and Surgical Consent Form"
          href="http://bhamc.com/docs/Anesth%20and%20Surgical%20Consent%20Form.pdf"
        />
        <DownloadLink
          label="Drop-Off Consent Form"
          href="http://bhamc.com/docs/Drop-Off%20Consent%20Form.pdf"
        />
        <DownloadLink
          label="Boarding Consent Form"
          href="http://bhamc.com/docs/BoardingDropOffForm.pdf"
        />
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

Forms.propTypes = {
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

export default connect(mapStateToProps)(Forms);
