import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

export const WithLoading = ({ request, children }) =>
  <Box style={{ width: '100%' }} align="center">
    {request &&
      <Box pad="medium">
        <Spinning size="medium" />
      </Box>
    }
    {!request && children}
  </Box>;

WithLoading.propTypes = {
  request: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default WithLoading;
