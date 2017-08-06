import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import { JobPosting, WithLoading } from 'components';
import * as JobPostingsActions from './actions';

export class JobPostings extends Component {
  componentDidMount() {
    this.props.dispatch(JobPostingsActions.loadData());
  }

  render() {
    const { data, error, request } = this.props;

    const posts = (!request && data.length > 0)
      ? data.map(({
        title,
        contact_email: contactEmail,
        contact_phone: contactPhone,
        description,
        id,
      }) =>
        <JobPosting
          title={title}
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          description={description}
          key={`job-${id}`}
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
              responsive={false}
              justify="center"
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
  const { request, error, data } = state.jobPostings;
  return {
    request, error, data,
  };
}

JobPostings.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      contact_email: PropTypes.string,
      contact_phone: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
};

export default connect(mapStateToProps)(JobPostings);
