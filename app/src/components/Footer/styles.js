import styled from 'styled-components';
import Box from 'grommet/components/Box';

export const FooterLogo = styled.img`
  max-width: 100%;
  width: 60px;
  height: auto;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 12px;
`;

export const FooterColumn = styled(Box)`
  @media(max-width: 719px) {
    width: 100%;
    text-align: center;
    p { max-width: 100%; }
    align-items: center;
  }
`;
