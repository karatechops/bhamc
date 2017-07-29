import styled from 'styled-components';
import Box from 'grommet/components/Box';
import GrommetHeader from 'grommet/components/Header';

export const DesktopNav = styled(Box)`
  display: none;
  @media(min-width: 880px) {
    display: flex;
  }
`;

export const MobileNav = styled(Box)`
  display: flex;
  @media(min-width: 880px) {
    display: none;
  }
  a {
    text-align: right;
  }
`;

export const Header = styled(GrommetHeader)`
  flex-direction: column;
  text-align: center;
  @media(min-width: 880px) {
    flex-direction: row;
  }
`;
