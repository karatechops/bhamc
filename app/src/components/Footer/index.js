import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import MapIcon from 'grommet/components/icons/base/Map';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebookOption';
import { FooterLogo, Divider, FooterColumn, StyledFooter } from './styles';
import aahaLogo from './aaha.jpg';

export const Footer = () =>
  <StyledFooter
    pad={{
      horizontal: 'medium',
      vertical: 'medium',
      between: 'large',
    }}
    colorIndex="neutral-1"
    align="start"
    justify="center"
    full="horizontal"
  >
    <FooterColumn>
      <Heading tag="h3" margin="small">
        Hospital Hours
      </Heading>
      <Divider />
      <Paragraph margin="none">
        Monday - Friday: 7:30 am - 7:30 pm
      </Paragraph>
      <Paragraph margin="none">
        Saturday: 7:30 am - 1:30 pm
      </Paragraph>
      <Paragraph margin="none">
        Appointments Preferred
      </Paragraph>
    </FooterColumn>
    <FooterColumn>
      <Heading tag="h3" margin="small">
        Location
      </Heading>
      <Divider />
      <Paragraph margin="none">
        1221 Belle Haven Road
      </Paragraph>
      <Paragraph margin="none">
        Alexandria, VA 22307
      </Paragraph>
      <Anchor
        reverse
        icon={<MapIcon />}
        label="View Map"
        target="_blank"
        href="https://www.google.com/maps/place/Belle+Haven+Animal+Medical+Centre/@38.785937,-77.057076,12z/data=!4m13!1m7!3m6!1s0x89b7b034a51a741d:0x386950d364cdc491!2s1221+Belle+Haven+Rd,+Alexandria,+VA+22307!3b1!8m2!3d38.7804665!4d-77.0554556!3m4!1s0x89b7b034988ea74f:0x846f6f9f2ddc75b!8m2!3d38.780339!4d-77.054958"
        style={{
          fontWeight: 100,
          paddingTop: '6px',
          fontSize: '16px',
        }}
      />
    </FooterColumn>
    <FooterColumn>
      <Heading tag="h3" margin="small">
        Contact
      </Heading>
      <Divider />
      <Paragraph margin="none">
        Phone: (703) 721 - 0088
      </Paragraph>
      <Paragraph margin="none">
        E-mail: info@bhamc.com
      </Paragraph>
    </FooterColumn>
    <FooterColumn>
      <Heading tag="h3" margin="small">
        Social
      </Heading>
      <Divider />
      <Box pad={{ between: 'small' }}>
        <Button href="https://twitter.com/bhamcvet" rel="noopener noreferer">
          <Box
            direction="row"
            responsive={false}
            pad={{
              between: 'small',
              horizontal: 'small',
            }}
          >
            <SocialTwitterIcon style={{ verticalAlign: 'middle' }} />
            <Paragraph margin="none">
              Twitter
            </Paragraph>
          </Box>
        </Button>
        <Button href="https://www.facebook.com/BHAMC" rel="noopener noreferer">
          <Box
            direction="row"
            responsive={false}
            pad={{
              between: 'small',
              horizontal: 'small',
            }}
          >
            <SocialFacebookIcon style={{ verticalAlign: 'middle' }} />
            <Paragraph margin="none">
              Facebook
            </Paragraph>
          </Box>
        </Button>
      </Box>
    </FooterColumn>
    <FooterColumn alignSelf="center">
      { typeof window !== 'undefined' &&
        <FooterLogo src={aahaLogo} />
      }
    </FooterColumn>
  </StyledFooter>;

export default Footer;