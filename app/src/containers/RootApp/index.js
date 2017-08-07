/* @flow */
import React, { Component, PropTypes } from 'react';
import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import { AppContainer as ReactHotLoader } from 'react-hot-loader';
import { PageMarquee } from 'containers';
import { Nav, Footer } from 'components';

// eslint-disable-next-line react/prefer-stateless-function
class RootApp extends Component {
  render() {
    return (
      <ReactHotLoader>
        <GrommetApp
          centered={false}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Nav path={this.props.location.pathname} />
          <Box flex style={{ minHeight: '100%' }}>
            { typeof window !== 'undefined' &&
              <PageMarquee path={this.props.location.pathname} />
            }
            <Box flex>
              {this.props.children}
            </Box>
            <Footer />
          </Box>
        </GrommetApp>
      </ReactHotLoader>
    );
  }
}

RootApp.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default RootApp;
