import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import WithLoading from 'components/WithLoading';
import * as LinksActions from './actions';

export class Links extends Component {
  componentDidMount() {
    this.props.dispatch(LinksActions.loadData());
  }

  renderFilteredPosts(data, filter) {
    return data.map(({ id, link_type: linkType, text, url }) =>
      linkType === filter &&
      <Anchor
        label={text}
        href={url}
        target="_blank"
        rel="noopener noreferer"
        key={id}
      />);
  }

  render() {
    const { data, error, request } = this.props;

    return (
      <Box align="center" pad={{ between: 'small' }}>
        <WithLoading request={request}>
          {error ||
            <Box>
              <Box align="center">
                <Heading tag="h3" margin="small">
                  Referrals
                </Heading>
                { this.renderFilteredPosts(data, 'referral') }
              </Box>
              <Box align="center">
                <Heading tag="h3" margin="small">
                  Insurance Companies
                </Heading>
                <Box pad={{ between: 'medium' }} align="center">
                  { this.renderFilteredPosts(data, 'insurance') }
                </Box>
              </Box>
              <Box align="center">
                <Heading tag="h3" margin="small">
                  Other Links
                </Heading>
                { this.renderFilteredPosts(data, 'other') }
              </Box>
            </Box>
          }
        </WithLoading>
        <Box pad="small" />
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.links;
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
