import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
// import WithLoading from 'components/WithLoading';
// import * as FormsActions from './actions';

export class Links extends Component {
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
      : undefined;*/

    return (
      <Box align="center" pad={{ between: 'small' }}>
        {/* <WithLoading request={request}>
          {error || posts}
        </WithLoading> */}
        <Box align="center">
          <Heading tag="h3" margin="small">
            Referrals
          </Heading>
          <Anchor
            label="Ronald K. Fallon, DVM"
            href="http://ambulatoryveterinarysurgery.com/"
            target="_blank"
          />
        </Box>
        <Box align="center">
          <Heading tag="h3" margin="small">
            Insurance Companies
          </Heading>
          <Box pad={{ between: 'medium' }} align="center">
            <Anchor
              label="Healthy Paws Pet Insurance & Foundation"
              href="http://www.gohealthypaws.com/"
              target="_blank"
            />
            <Anchor
              label="Embrace Pet Insurance"
              href="http://www.embracepetinsurance.com/"
              target="_blank"
            />
            <Anchor
              label="Pets Best Insurance"
              href="https://www.petsbest.com/"
              target="_blank"
            />
          </Box>
        </Box>
        <Box align="center">
          <Heading tag="h3" margin="small">
            Other Links
          </Heading>
          <Anchor
            label="Christian Veterinary Mission"
            href="http://cvmusa.org/"
            target="_blank"
          />
        </Box>
        <Box pad="small" />
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

Links.propTypes = {
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

export default connect(mapStateToProps)(Links);
