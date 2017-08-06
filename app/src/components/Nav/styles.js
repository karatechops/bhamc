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
  button {
    background: rgba(56, 66, 78, 0.25);
    border-radius: 100px;
    margin: 5px;
  }
`;

export const Header = styled(GrommetHeader)`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(56, 66, 78, 0);
  flex-direction: column;
  text-align: center;
  padding: 0;
  height: auto;
  min-height: auto;
  
  .header-title {
    display: none;
  }

  @media(min-width: 880px) {
    flex-direction: row;
    padding: 12px;
    min-height: 72px;
    background: rgb(56, 66, 78);

    .header-title {
      display: block;
    }
  }
`;
