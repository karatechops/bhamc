import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import WithLoading from 'components/WithLoading';
import * as ArticlesActions from './actions';

export class Articles extends Component {
  componentDidMount() {
    const { query } = this.props;
    const id = query && query.id;
    const category = query && query.category;
    this.props.dispatch(ArticlesActions.loadData(id, category));
  }

  render() {
    const { data, error, request } = this.props;

    const post = (!request && data && data.hasOwnProperty('html'))
      ? <div
        dangerouslySetInnerHTML={{ __html: data.html }}
        style={{ width: '100%' }}
      />
      : undefined;

    return (
      <Box align="center" full="horizontal">
        <WithLoading request={request}>
          { data && data.title &&
            <Heading tag="h3">{data.title}</Heading>
          }
          {error || post}
        </WithLoading>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.articles;
  return {
    request, error, data,
  };
}

Articles.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    html: PropTypes.string,
  }),
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
  query: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(Articles);
