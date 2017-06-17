import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

export const WithLoading = ({ request, children }) =>
  <div>
    {request &&
      <Box pad="medium">
        <Spinning size="medium" />
      </Box>
    }
    {!request && children}
  </div>;

WithLoading.propTypes = {
  request: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default WithLoading;
