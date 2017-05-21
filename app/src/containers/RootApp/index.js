/* @flow */
import React, { Component, PropTypes } from 'react';
import GrommetApp from 'grommet/components/App';
import { AppContainer as ReactHotLoader } from 'react-hot-loader';
import { Nav, PageMarquee, Footer } from 'components';

// eslint-disable-next-line react/prefer-stateless-function
class RootApp extends Component {
  render() {
    return (
      <ReactHotLoader>
        <GrommetApp centered={false}>
          <Nav />
          <PageMarquee />
          {this.props.children}
          <Footer />
        </GrommetApp>
      </ReactHotLoader>
    );
  }
}

RootApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootApp;
