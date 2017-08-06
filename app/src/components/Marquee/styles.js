import styled from 'styled-components';
import Box from 'grommet/components/Box';

export const MarqueeContainer = styled(Box)`
  height: 192px;
  @media(min-width: 880px) {
    height: 384px;
    margin-top: 72px;
  }
  @media(min-width: 1600px) {
    height: 600px;
  }
  background-position: ${({ backgroundPosition }) => backgroundPosition};
`;

export default MarqueeContainer;
