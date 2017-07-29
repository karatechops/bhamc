/* @flow */
import React, { Component, PropTypes } from 'react';
import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import { AppContainer as ReactHotLoader } from 'react-hot-loader';
import { Nav, PageMarquee, Footer } from 'components';

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
          <Nav />
          <Box flex style={{ minHeight: '100%' }}>
            <PageMarquee />
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
};

export default RootApp;
