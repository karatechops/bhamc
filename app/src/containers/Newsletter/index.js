import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import WithLoading from 'components/WithLoading';
import { NewsletterSection, SectionHeader } from 'components';
import { slugify } from 'utils';
import * as NewsletterAcctions from './actions';

export class Newsletter extends Component {
  componentDidMount() {
    if (!this.props.data || !this.props.data.table_of_contents) {
      this.props.dispatch(NewsletterAcctions.loadData());
    }
  }
  render() {
    const { data, error, request } = this.props;
    const { table_of_contents: contents, sections, callout } = data;
    const newsSections = contents && contents.map((key, keyIndex) =>
      <NewsletterSection
        key={`section-${keyIndex}`}
        title={contents[keyIndex]}
        content={sections[keyIndex]}
      />,
    );
    return (
      <Box align="center">
        <WithLoading request={request}>
          {error ||
            <Box align="center">
              <div dangerouslySetInnerHTML={{ __html: callout }} />
              <span id="table-of-contents" />
              <SectionHeader
                title="Table of Contents"
              />
              <Box
                pad={{ vertical: 'medium' }}
                full="horizontal"
              >
                { contents && contents.map(title =>
                  <Anchor
                    label={title}
                    key={slugify(title)}
                    path={`/news#${slugify(title)}`}
                  />,
                ) }
              </Box>
              {newsSections}
            </Box>
          }
        </WithLoading>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  const { request, error, data } = state.newsletter;
  return {
    request, error, data,
  };
}

Newsletter.propTypes = {
  data: PropTypes.shape({
    callout: PropTypes.string,
    table_of_contents: PropTypes.arrayOf(PropTypes.string),
    sections: PropTypes.array,
  }),
  dispatch: PropTypes.func,
  error: PropTypes.string,
  request: PropTypes.bool,
};

export default connect(mapStateToProps)(Newsletter);
