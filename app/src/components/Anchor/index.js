import styled from 'styled-components';
import Anchor from 'grommet/components/Anchor';

export default styled(Anchor)`
  text-decoration: none;

  &.active {
    font-weight: 700;
  }
`;
