import styled from 'styled-components';
import Box from 'grommet/components/Box';

export const PageMarqueeContainer = styled(Box)`
  height: 192px;
  @media(min-width: 880px) {
    height: 384px;
  }
`;

export default PageMarqueeContainer;
